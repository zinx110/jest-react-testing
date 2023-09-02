class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }
    get peek() {
        return this.items[this.top];
    }
    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }
    pop() {
        this.items[this.top] = undefined;
        this.top -= 1;
    }
}
describe("My Stack", () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });
    it("is created empty", () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
        expect(stack.peek).toBe(undefined);
    });
    it("can push to the top", () => {
        stack.push("a");
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("a");
    });
    it("can pop off", () => {
        stack.push("a");
        stack.pop();
        expect(stack.top).toBe(-1);
        expect(stack.peek).toBe(undefined);
        expect(stack.items).toEqual({});
    });
});
