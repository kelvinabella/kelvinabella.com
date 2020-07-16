import React from "react";
import { render, screen, fireEvent } from "~/test/utils/index";
import Logo from "~/components/Icons/Logo";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("Logo component", () => {
  it("renders Logo correctly", () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Logo correctly onMouseEnter", () => {
    render(<Logo />);
    const link = screen.getByTitle("Kelvs");

    // svg should be loaded
    fireEvent.mouseEnter(link);
    expect(link).toContainHTML("<title>Kelvs</title>");
  });
});
