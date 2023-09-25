import {test, expect}  from '@jest/globals'
import Match from "../match"

test("Match exists", ()=> {
    expect(new Match()).toBeDefined();
})

test("Match created with 0:0 score", ()=> {
    const match = new Match("home team", "away team");
    expect(match.homeScore).toEqual(0);
    expect(match.awayScore).toEqual(0);
})