import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { MazeService } from './services/maze.service';
import { EndScreenComponent } from './components/end-screen/end-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    GamePageComponent,
    EndScreenComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    MazeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
