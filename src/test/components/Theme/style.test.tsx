/* eslint-disable react/no-children-prop */
import React from "react";
import { render, screen } from "~/test/utils/index";
import "jest-styled-components";
import GlobalStyle from "~/components/Theme/GlobalStyle";
import Theme from "~/components/Theme";

describe("Theme styles", () => {
  it("renders GlobalStyle correctly", () => {
    const { container } = render(<GlobalStyle />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders Theme correctly", () => {
    const { container } = render(<Theme children={<div>render div</div>} />);
    expect(container.firstChild).toMatchSnapshot();

    // render div must be found in the document
    const children = screen.getByText("render div");
    expect(children).toBeInTheDocument();
  });
});
