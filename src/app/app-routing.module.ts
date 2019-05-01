import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { EndScreenComponent } from './components/end-screen/end-screen.component';

const routes: Routes = [
    { path: '', component: StartPageComponent },
    { path: 'play', component: GamePageComponent },
    { path: 'end', component: EndScreenComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }