import { cleanup, fireEvent, render } from "@testing-library/react";
import Counter from "../Counter";

beforeEach(() => {
    cleanup();
});

describe(Counter, () => {
    it("Counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });

    it("Count Should Increase by 1 if the Increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const incrementButton = getByRole("button", { name: "Increment" });

        const countValue0 = Number(getByTestId("count").textContent);
        expect(countValue0).toEqual(0);
        fireEvent.click(incrementButton);

        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(1);
    });

    it("Count Should Decrease by 1 if the Decrement button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const decrementButton = getByRole("button", { name: "Decrement" });
        const countValueBeforeDecrement = Number(
            getByTestId("count").textContent
        );
        fireEvent.click(decrementButton);
        const countValueAfterDecrement = Number(
            getByTestId("count").textContent
        );
        expect(countValueAfterDecrement).toEqual(countValueBeforeDecrement - 1);
    });

    it("Count Should become 0 if the Reset button is clicked", () => {
        const { getByRole, getByTestId } = render(<Counter initialCount={0} />);
        const resetButton = getByRole("button", { name: "Restart" });
        fireEvent.click(resetButton);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });

    it("Count should invert signs if Switch Sign button is clicked", () => {
        const { getByRole, getByTestId } = render(
            <Counter initialCount={21} />
        );
        const switchSignButton = getByRole("button", { name: "Switch Signs" });
        const countBeforeSwitch = Number(getByTestId("count").textContent);
        expect(countBeforeSwitch).toEqual(21);
        fireEvent.click(switchSignButton);
        const countAfterSwitch = Number(getByTestId("count").textContent);
        expect(countAfterSwitch).toEqual(-21);
    });
});
