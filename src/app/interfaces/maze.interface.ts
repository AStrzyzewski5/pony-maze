export interface Maze {
    pony: number;
    domokun: number;
    end_point: number;
    difficulty: number;
    data: { walls: string[] }[];
    maze_id: string;
    game_state: {
        state: string;
        state_result: string;
    };
}