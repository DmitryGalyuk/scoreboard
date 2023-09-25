import foo from "../foo"
import {test, expect}  from '@jest/globals'

test("test testing", () => {
    expect(foo()).toBe("foo");
})