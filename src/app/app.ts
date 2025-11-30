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

}