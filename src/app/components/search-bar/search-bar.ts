
import { FormsModule } from '@angular/forms';
import { Component, output, model } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  
  search = model<string>('Initial');

  searchButtonClicked = output({alias: 'submit'});
  
  searchClick() {
    // console.log('Click');
    this.searchButtonClicked.emit();
  }





}
