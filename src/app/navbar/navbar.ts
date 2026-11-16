import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  items = ['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin'];
  active = signal('Accueil');
}
