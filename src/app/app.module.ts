import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { FooterModule } from './components/footer/footer.module';
import { ListPokemonModule } from './components/list-pokemon/list-pokemon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavBarModule, 
    FooterModule,
    ListPokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
