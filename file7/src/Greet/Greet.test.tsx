import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Greet from "./Greet";

describe("Greet Component Tests", () => {
    it("Greet renders correctly", () => {
        render(<Greet />);
        const helloText = screen.getByText(/hello/i);
        expect(helloText).toBeInTheDocument();
    });
    it("Greet renders correctly(2)", () => {
        const GreetComp = TestRenderer.create(<Greet />);
        const root = GreetComp.root;
        const helloText = root.findAllByType("div")[0].children[0];
        console.log(helloText);
        expect(helloText).toBe("Hello");
    });
});
