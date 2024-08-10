import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon.component';
import { CardPokemonModule } from "../card-pokemon/card-pokemon.module";
import { SearchBarModule } from '../search-bar/search-bar.module';



@NgModule({
  declarations: [
    ListPokemonComponent
  ],
  imports: [
    CommonModule,
    CardPokemonModule,
    SearchBarModule
  ],
  exports: [ListPokemonComponent]
})
export class ListPokemonModule { }
