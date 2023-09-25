import {test, expect}  from '@jest/globals'
import Match from "../match"

test("Match exists", ()=> {
    expect(new Match()).toBeDefined();
})