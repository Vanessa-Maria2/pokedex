import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { PokemonType } from 'src/app/models/pokemon';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  textControl = new FormControl('');
  apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  pokemons: PokemonType[] = [];
  results: any[] = [];
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.search()
  }

  search() {
    this.http.get<{ results: { name: string; url: string }[] }>(this.apiUrl)
      .pipe(
        map(response => response.results),
        catchError(error => {
          this.errorMessage = 'Failed to load Pokémon data';
          return of([]);
        })
      )
      .subscribe(results => {
        this.results = results;
        this.results.forEach(result => {
          this.searchByPokemon(result.url);
        })
      });
  }

  searchByPokemon(url: string) {
    this.http.get<PokemonType>(url)
      .pipe(
        catchError(error => {
          this.errorMessage = 'Failed to load Pokémon details';
          return of(null);
        })
      )
      .subscribe(pokemon => {
        if (pokemon) {
          this.pokemons.push(pokemon);
        }
      });
  }
}
