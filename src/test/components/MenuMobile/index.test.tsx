import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "~/test/utils/index";
import MenuMobile from "~/components/MenuMobile";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("MenuMobile component", () => {
  it("renders MenuMobile correctly", () => {
    const { asFragment } = render(<MenuMobile />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the proper icon depending whether dark mode state value is true or false", () => {
    const { container } = render(<MenuMobile />);
    const hamburger = screen.getByTitle("Hamburger Menu");
    window.scrollTo = jest.fn();
    // svg should be loaded
    userEvent.click(hamburger);
    expect(hamburger).toContainHTML("<title>Hamburger Menu</title>");
    expect(container).toContainHTML(`<a href="/about">About</a>`);
  });
});
