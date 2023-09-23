import TestRenderer from "react-test-renderer";

import { render, screen } from "@testing-library/react";
import { Form1 } from "./Form1";

describe("Form1 (testing-library/react)", () => {
    it("getByRole queries", () => {
        render(<Form1 />);
        const pageHeadingElement = screen.getByRole("heading", {
            name: "Job Application Form",
            level: 1,
        });
        expect(pageHeadingElement).toBeInTheDocument();

        const sectionHeadingElement = screen.getByRole("heading", {
            name: "Section 1",
            level: 2,
        });
        expect(sectionHeadingElement).toBeInTheDocument();
        const nameElement = screen.getByRole("textbox", { name: "Name" });
        expect(nameElement).toBeInTheDocument();
        const bioElement = screen.getByRole("textbox", { name: "Bio" });
        expect(bioElement).toBeInTheDocument();
        const jobLocationElement = screen.getByRole("combobox", {
            name: "Job Location",
        });
        expect(jobLocationElement).toBeInTheDocument();
        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();
        const submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
    });

    it("getByLabelText queries", () => {
        render(<Form1 />);
        const nameElement = screen.getByLabelText("Name", {
            selector: "input",
        });
        expect(nameElement).toBeInTheDocument();
        const nameElement2 = screen.getByLabelText("Name", {
            selector: "select",
        });
        expect(nameElement2).toBeInTheDocument();
        const termsElement = screen.getByLabelText(
            "I agree to the terms and conditions."
        );
        expect(termsElement).toBeInTheDocument();
    });

    it("getByPlaceholderText", () => {
        render(<Form1 />);
        const nameElement = screen.getByPlaceholderText("Full Name");
        expect(nameElement).toBeInTheDocument();
    });
});

describe("Form1 (react-test-renderer)", () => {
    it("renders correctly", async () => {
        const element = TestRenderer.create(<Form1 />).root;
        const allInputs = await element.findAllByType("input");
        const nameElement = allInputs[0];
        expect(nameElement).not.toBeNull();
    });
});
