import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { FooterModule } from './components/footer/footer.module';
import { SearchBarModule } from './components/search-bar/search-bar.module';

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
    SearchBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
