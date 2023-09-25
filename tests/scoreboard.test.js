import { test, expect } from '@jest/globals'
import Scoreboard from "../scoreboard"
import Match from '../match';

test("Scoreboard exists", () => {
    expect(new Scoreboard()).toBeDefined();
});

test("Match can be started, score is 0-0", () => {
    const board = new Scoreboard();
    board.startMatch("home", "away");
    expect(board.getMatch("home", "away").homeScore).toBe(0);
    expect(board.getMatch("home", "away").awayScore).toBe(0);
});

test("Match score can be updated", () => {
    const board = new Scoreboard();
    board.startMatch("home", "away");
    board.updateScore("home", "away", 3, 5);
    expect(board.getMatch("home", "away").homeScore).toBe(3);
    expect(board.getMatch("home", "away").awayScore).toBe(5);
});

test("Match can be finished", () => {
    const board = new Scoreboard();
    board.startMatch("home1", "away1");
    board.startMatch("home2", "away2");
    board.startMatch("home3", "away3");
    expect(board.getMatch("home2", "away2")).not.toBeNull();
    expect(board.matches.length).toBe(3);

    board.finishMatch("home2", "away2");
    expect(() => { board.getMatch("home2", "away2") }).toThrow()
    expect(board.matches.length).toBe(2);
});

test("Summary is ordered based on the total score", () => {
    const board = new Scoreboard();
    Match.matchNumberCounter = 0; // in tests the static context is saved between test executions, we must reset it in counter sensitive tests
    board.startMatch("home1", "away1");
    board.startMatch("home2", "away2");
    board.startMatch("home3", "away3");
    board.startMatch("home4", "away4");

    board.updateScore("home1", "away1", 2, 2);
    board.updateScore("home2", "away2", 5, 1);
    board.updateScore("home3", "away3", 3, 0);
    board.updateScore("home4", "away4", 3, 3);

    const summaryOrder = board.summary().map(m => m.matchNumber);
    expect(summaryOrder).toEqual([3, 1, 0, 2]);
});

test("should throw error when updating score for non-existent match", () => {
    const board = new Scoreboard();
    board.startMatch("home1", "away1");

    expect(()=>{board.updateScore("home2", "away2", 5, 1)}).toThrow();
});

test("should throw error when finishing a non-existent match", () => {
    const board = new Scoreboard();
    board.startMatch("home1", "away1");

    expect(()=>{board.finishMatch("home2", "away2")}).toThrow();
});

test("should not allow updates after match is finished", ()=>{
    const board = new Scoreboard();
    board.startMatch("home1", "away1");
    board.startMatch("home2", "away2");
    board.startMatch("home3", "away3");

    board.finishMatch("home2", "away2");
    expect(()=>{board.updateScore("home2", "away2", 3, 0)}).toThrow();
});

test("should not allow a team to participate in two matches simultaneously", ()=> {
    const board = new Scoreboard();
    board.startMatch("home1", "away1");
    board.startMatch("home2", "away2");

    expect(()=>{board.startMatch("home1", "away3");}).toThrow();
    expect(()=>{board.startMatch("home3", "away1");}).toThrow();
});

test("if no active matches summary returns empty array", ()=> {
    const board = new Scoreboard();
    expect(board.summary()).toEqual([]);

    board.startMatch("home1", "away1");
    board.finishMatch("home1", "away1");
    expect(board.summary()).toEqual([]);
})