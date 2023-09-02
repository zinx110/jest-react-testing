const subtract = require("./subtract");

describe("Subtract file tests", () => {
    it("test 1 subtract", () => {
        expect(subtract(1, 2)).toBe(-1);
    });
});
