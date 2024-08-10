import { Component, Output } from '@angular/core';
import { PokemonType } from 'src/app/models/pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent {
  pokemons: PokemonType[] = [];

  handlePokemons(pokemons: PokemonType[]) {
    this.pokemons = pokemons;
  }

}
