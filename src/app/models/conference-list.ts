import { Conference } from './conference';

export class ConferenceList {
  static readonly conferences: Conference[] = [
    { id: 1, title: 'Angular 21 Conference', description: 'Nouveautés d’Angular 21',
      date: new Date(2027, 10, 15), place: 'Tunis', maxParticipants: 50, nbParticipants: 25 },
    { id: 2, title: 'Signals Workshop', description: 'Atelier sur les signals',
      date: new Date(2027, 10, 30), place: 'Ariana', maxParticipants: 40, nbParticipants: 34 },
    { id: 3, title: 'Web Conference', description: 'Tendances du web moderne',
      date: new Date(2027, 10, 20), place: 'Sousse', maxParticipants: 30, nbParticipants: 30 },
  ];
}
