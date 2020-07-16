import React from "react";
import { render } from "~/test/utils/index";
import "jest-styled-components";

import {
  MenuDesktopContainer,
  LinkWrapper,
} from "~/components/MenuDesktop/style";

describe("MenuDesktop styles", () => {
  it("renders MenuDesktopContainer correctly", () => {
    const { container } = render(<MenuDesktopContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders LinkWrapper correctly", () => {
    const { container } = render(<LinkWrapper isActive />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders LinkWrapper correctly", () => {
    const { container } = render(<LinkWrapper isActive={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
