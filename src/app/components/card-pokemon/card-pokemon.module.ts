import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon.component';
import {MatCardModule} from '@angular/material/card';
import { PokemonType } from 'src/app/models/pokemon';


@NgModule({
  declarations: [
    CardPokemonComponent
  ],
  imports: [
    CommonModule, MatCardModule
  ],
  exports: [CardPokemonComponent]
})
export class CardPokemonModule { 
  pokemons: PokemonType[] = [];
}
