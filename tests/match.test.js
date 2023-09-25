import { test, expect } from '@jest/globals'
import Match from "../match"

test("Match exists", () => {
    expect(new Match("home", "away")).toBeDefined();
})

test("Match created with 0:0 score", () => {
    const match = new Match("home team", "away team");
    expect(match.homeScore).toEqual(0);
    expect(match.awayScore).toEqual(0);
})

test("Match score updated", () => {
    const match = new Match("home team", "away team");
    match.updateScore(2, 3);
    expect(match.homeScore).toEqual(2);
    expect(match.awayScore).toEqual(3);
})

test("Match accepts only non-negative integers as scores", () => {
    const match = new Match("home team", "away team");
    expect(() => { match.updateScore(-1, 3) }).toThrow();
    expect(() => { match.updateScore(1, -3) }).toThrow();
    expect(() => { match.updateScore("abc", 3) }).toThrow();
    expect(() => { match.updateScore(1, "def") }).toThrow();
    expect(() => { match.updateScore(1.3, 3) }).toThrow();
    expect(() => { match.updateScore(1, 3.4) }).toThrow();
})

test('Match should allow only non-empty string team names', () => {
    expect(() => {new Match('', 'away')}).toThrow();
    expect(() => {new Match('home', '')}).toThrow();

    expect(() => {new Match('home', 3)}).toThrow();
    expect(() => {new Match(3, 'away')}).toThrow();
    
    expect(() => {new Match('home', {})}).toThrow();
    expect(() => {new Match({}, 'away')}).toThrow();
    
    expect(() => {new Match('home', [])}).toThrow();
    expect(() => {new Match([], 'away')}).toThrow();
});

test("Team names within a match can not be the same", () =>{
    expect(()=> {new Match("a", "a")}).toThrow();
})