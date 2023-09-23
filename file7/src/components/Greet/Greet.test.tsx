import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Greet from "./Greet";

describe("Greet Component Tests", () => {
    it("Greet renders correctly", () => {
        render(<Greet />);
        const helloText = screen.getByText(/hello/i);
        expect(helloText).toBeInTheDocument();
    });
    it("Greet renders correctly(2)", async () => {
        const GreetComp = TestRenderer.create(<Greet />);
        const root = GreetComp.root;
        // eslint-disable-next-line testing-library/await-async-query, testing-library/no-node-access
        const helloText = root.findAllByType("div")[0].children[0];

        expect(helloText).toBe("Hello");
    });
});
