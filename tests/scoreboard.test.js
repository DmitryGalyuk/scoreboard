import {test, expect}  from '@jest/globals'
import Scoreboard from "../scoreboard"

test("Scoreboard exists", ()=> {
    expect(new Scoreboard()).toBeDefined();
})