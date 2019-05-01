import { Component, OnInit } from '@angular/core';
import { MazeService } from '../../services/maze.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  ponies = [
    'Twilight Sparkle'
  ];

  difficulty: number
  pony: string;
  height: number;
  width: number; 
  
  constructor(private mazeService: MazeService, private router: Router) { }

  ngOnInit() {
    this.pony = this.ponies[0];
  }

  /**
   * Creates a new maze when called and navigates to the game component.
   *
   */
  startGame() {
    console.log('params',this.pony, this.width, this.height, this.difficulty);
    this.mazeService.create(this.pony, this.width, this.height, this.difficulty)
      .subscribe(
        response => this.mazeService.updateId(response.maze_id),
        error => console.log(error)
      );
    this.router.navigate(['play']);
  }

}
