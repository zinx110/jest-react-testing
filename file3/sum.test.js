const sum = require("./sum");

test("add numbers 1", () => {
    expect(sum(2, 3)).toBe(5);
});
test("add numbers 2", () => {
    expect(sum(2, 1)).toBe(3);
});
it("add numbers 3", () => {
    expect(sum(2, 1)).toBe(3);
});
test.todo("todo sum 0");

describe("Test 1", () => {
    it("part 1", () => {
        expect(sum(1, 1)).toBe(2);
    });
    it.todo("todo 1");
    test("part 3", () => {
        expect(sum(2, 2)).toBe(4);
    });
    it("part 4", () => {
        expect(sum(2, 2)).toBe(4);
    });
    test.todo("todo 2");
});
