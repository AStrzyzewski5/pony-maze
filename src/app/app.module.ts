import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { MazeService } from './services/maze.service';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MazeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
