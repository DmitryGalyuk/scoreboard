import { test, expect } from '@jest/globals'
import Scoreboard from "../scoreboard"
import Match from '../match';

test("full flow with adding matches, updating the score, finishing, calculating the summary", ()=> {
    const board = new Scoreboard();
    Match.matchNumberCounter = 0;

    board.startMatch("home1", "away1");
    board.startMatch("home2", "away2");
    
    board.updateScore("home1", "away1", 2, 2);
    board.updateScore("home2", "away2", 5, 1);
    expect(board.summary().map(n=>n.matchNumber)).toEqual([1, 0])

    board.startMatch("home3", "away3");
    board.updateScore("home3", "away3", 3, 3);
    expect(board.summary().map(n=>n.matchNumber)).toEqual([2, 1, 0])
    

    board.finishMatch("home1", "away1");
    board.finishMatch("home2", "away2");
    expect(board.summary().map(n=>n.matchNumber)).toEqual([2])
    
    
})

