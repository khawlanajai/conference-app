import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = ['You have a new message', 'your profile has been updated'];
  visible = signal(false);

  toggle() {
    this.visible.update(v => !v);
  }
}
