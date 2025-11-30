import { Carte } from './../../models/carte.models';
import { Component, Input, input, inputBinding } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css',
})

export class PlayingCard {
  @Input({
    alias: 'my-pcard',
    transform: (value: Carte) => {
      value.valueP =value.valueP / 2;
      return value;
      }
    }) 
    carte: Carte = new Carte();
}
