import { Component, computed, signal } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference';
import { ConferenceList } from '../models/conference-list';
import { ConferenceDetails } from '../conference-details/conference-details';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe,ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceListComponent {
  conferences = signal<Conference[]>([...ConferenceList.conferences]);
  search = signal('');

  // Conférences à venir, filtrées par le titre saisi
  filtered = computed(() => {
    const term = this.search().trim().toLowerCase();
    const now = new Date();
    return this.conferences().filter(
      c => c.date >= now && c.title.toLowerCase().includes(term)
    );
  });

  remaining(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  // Vert : disponible, orangé : < 10 places, rouge : complet
  btnClass(c: Conference) {
    const r = this.remaining(c);
    return { green: r >= 10, orange: r > 0 && r < 10, red: r <= 0 };
  }

  register(c: Conference) {
    if (this.remaining(c) <= 0) return;
    this.conferences.update(list =>
      list.map(x => (x.id === c.id ? { ...x, nbParticipants: x.nbParticipants + 1 } : x))
    );
  }
  selectedId = signal<number | null>(null);

selected = computed(
  () => this.conferences().find(c => c.id === this.selectedId()) ?? null
);

select(c: Conference) {
  this.selectedId.set(c.id);
}
}
