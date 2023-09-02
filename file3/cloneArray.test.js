const cloneArray = require("./cloneArray");
test("test A", () => {
    expect(cloneArray([])).not.toBe([]);
});
describe("Test for clone array", () => {
    it("clone array 1", () => {
        const array = [1, 2, 3];
        expect(cloneArray(array)).toEqual(array);
    });
    it("clone array 2", () => {
        const array = ["a", "b"];
        expect(cloneArray(array)).toEqual(["a", "b"]);
        expect(cloneArray(array)).not.toBe(array);
    });
});
