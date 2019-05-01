import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maze } from '../interfaces/maze.interface';
import { BehaviorSubject, Observable, identity } from 'rxjs';

@Injectable()
export class MazeService {

  private mazeState: Maze;
  private mazeSubject: BehaviorSubject<Maze> = new BehaviorSubject<Maze>(null);

  constructor(private http: HttpClient) {
    this.mazeState = {} as Maze;
  }

  create(pony: string, width: number, height: number, difficulty: number): Observable<any> {
    return this.http.post<any>('https://ponychallenge.trustpilot.com/pony-challenge/maze', {
      "maze-width": +width,
      "maze-height": +height,
      "maze-player-name": pony,
      "difficulty": +difficulty
    });
  }

  get(id: string): Observable<any> {
    return this.http.get('https://ponychallenge.trustpilot.com/pony-challenge/maze/' + id);
  }

  move(id: string, direction: 'north' | 'east' | 'south' | 'west'): Observable<any> {
    return this.http.post('https://ponychallenge.trustpilot.com/pony-challenge/maze/' + id, {
      direction: direction
    });
  }

  updateId(id: string) {
    this.mazeState.maze_id = id;
    this.mazeSubject.next(this.mazeState);
  }

  subscribeToState(): Observable<Maze> {
    return this.mazeSubject.asObservable();
  }
}
