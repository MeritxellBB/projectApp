import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player-list/player/player.component';
import { HonoursComponent } from './player-list/honours/honours.component';
import { StadiumComponent } from './player-list/stadium/stadium.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerComponent,
    HonoursComponent,
    StadiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
