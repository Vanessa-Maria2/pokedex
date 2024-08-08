import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon.component';
import {MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    CardPokemonComponent
  ],
  imports: [
    CommonModule, MatCardModule,
    MatChipsModule
  ],
  exports: [CardPokemonComponent]
})
export class CardPokemonModule { }
