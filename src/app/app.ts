import { Carte } from './models/carte.models';
import { Component, signal } from '@angular/core';
import { bindCallback } from 'rxjs';
import { PlayingCard } from './components/playing-card/playing-card';
import { SearchBar } from './components/search-bar/search-bar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCard, SearchBar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {

  carte1!: Carte;
  count: number = 0;
  search = '';

  constructor() {
    this.carte1 = new Carte();
    this.carte1.name = "Roi";
    this.carte1.valueP = 13;
    this.carte1.description = "Le roi de carreau";
  }

  increaseCount() {
    this.count++;
  }



}