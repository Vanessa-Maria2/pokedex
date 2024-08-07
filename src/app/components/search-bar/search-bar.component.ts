import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  textControl = new FormControl('', Validators.requiredTrue);
  apiUrl =  'https://pokeapi.co/api/v2/pokemon';


  constructor(private http: HttpClient) {

  }

  search() {
    
  }
}
