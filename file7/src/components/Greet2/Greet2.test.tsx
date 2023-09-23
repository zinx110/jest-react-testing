import { render, screen } from "@testing-library/react";
import { Greet2 } from "./Greet2";

describe("Greet 2 Component- Test Driven practice 1", () => {
    // it("Should render correctly", () => {
    //     render(<Greet2 />);
    //     const helloText = screen.getByText("Hello Guest");
    //     expect(helloText).toBeInTheDocument();
    // });
    it("Greet renders with a name", () => {
        render(<Greet2 name="Zinx" />);
        const helloText = screen.getByText("Hello Zinx");
        expect(helloText).toBeInTheDocument();
    });
});
