import {test, expect}  from '@jest/globals'
import Scoreboard from "../scoreboard"

test("Scoreboard exists", ()=> {
    expect(new Scoreboard()).toBeDefined();
});

test("Match can be started, score is 0-0", ()=>{
    const board = new Scoreboard();
    board.startMatch("home", "away");
    expect(board.getMatch("home", "away").homeScore).toEqual(0);
    expect(board.getMatch("home", "away").awayScore).toEqual(0);
});

test("Match score can be updated");
test("Match can be finished");
test("Summary is ordered based on the total score");
test("Finished match is removed from the summary")

test("should not allow starting a match with same teams");
test("should throw error when updating score for non-existent match");
test("should throw error when finishing a non-existent match");
test("should not allow updates after match is finished");
test("should not allow a team to participate in two matches simultaneously");