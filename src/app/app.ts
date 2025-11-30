import { Carte } from './models/carte.models';
import { Component, signal } from '@angular/core';
import { bindCallback } from 'rxjs';
import { PlayingCard } from './components/playing-card/playing-card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {

  carte1!: Carte;

  constructor() {
    this.carte1 = new Carte();
    this.carte1.name = "Roi";
    this.carte1.valueP = 13;
    this.carte1.description = "Le roi de carreau";
  }
}