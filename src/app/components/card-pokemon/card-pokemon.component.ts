import { Component, Input } from '@angular/core';
import { PokemonType } from 'src/app/models/pokemon';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent {
  @Input() pokemons: PokemonType[] = [];
}
