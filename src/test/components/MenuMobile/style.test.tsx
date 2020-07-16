import React from "react";
import { render } from "~/test/utils/index";
import "jest-styled-components";
import {
  MenuMobileContainer,
  LinkWrapper,
  HamburgerWrapper,
} from "~/components/MenuMobile/style";

describe("MenuMobile styles", () => {
  it("renders MenuMobileContainer correctly", () => {
    const { container } = render(<MenuMobileContainer isActive />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders MenuMobileContainer correctly", () => {
    const { container } = render(<MenuMobileContainer isActive={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders LinkWrapper correctly", () => {
    const { container } = render(<LinkWrapper />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders HamburgerWrapper correctly", () => {
    const { container } = render(<HamburgerWrapper isActive />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders HamburgerWrapper correctly", () => {
    const { container } = render(<HamburgerWrapper isActive={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
