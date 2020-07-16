import React from "react";
import { render } from "~/test/utils/index";
import "jest-styled-components";

import { IconContainer, AnimatedSpan } from "~/components/DarkModeIcon/style";

describe("Dark mode icon styles", () => {
  it("renders IconContainer correctly", () => {
    const { container } = render(<IconContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders AnimatedSpan correctly", () => {
    const { container } = render(<AnimatedSpan />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
