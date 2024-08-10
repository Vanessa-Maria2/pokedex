import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() pokemonsEmitter = new EventEmitter<PokemonType[]>();
  results: any[] = [];
  errorMessage: string | null = null;
  limit = 100;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch(event?: Event) {
    event?.preventDefault();
    const query = this.textControl.value?.trim().toLowerCase();
    this.pokemons = [];
    this.errorMessage = null;
    this.results = [];
    this.pokemonsEmitter.emit(this.pokemons);

    if (query) {
      this.searchByPokemon(`${this.apiUrl}/${query}`);
    } else {
      this.http.get<{ results: { name: string; url: string }[] }>(`${this.apiUrl}?limit=${this.limit}`)
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
          this.pokemonsEmitter.emit(this.pokemons);
        }
      });
  }

}
