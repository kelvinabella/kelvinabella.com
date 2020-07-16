import React from "react";
import { render } from "~/test/utils/index";
import "jest-styled-components";
import { NavContainer, MenuWrapper } from "~/components/Navbar/style";

describe("Navbar styles", () => {
  it("renders NavContainer correctly", () => {
    const { container } = render(<NavContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders MenuWrapper correctly", () => {
    const { container } = render(<MenuWrapper />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
