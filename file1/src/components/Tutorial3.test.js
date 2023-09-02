import { render, screen } from "@testing-library/react";
import Tutorial3 from "./Tutorial3";

test("Tutorial3-Test-link1", () => {
    render(<Tutorial3 />);
    const text = screen.getByText("link");
    expect(text.href).toContain("www.facebook.com");
});
test("Tutorial3-Test-link2", () => {
    render(<Tutorial3 />);
    const text = screen.getByTestId("youtubeLink");
    expect(text.href).toContain("www.youtube.com");
});
