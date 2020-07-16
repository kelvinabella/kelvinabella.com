import React from "react";
import { render } from "~/test/utils/index";
import "jest-styled-components";
import { LoaderContainer, LogoWrapper } from "~/components/Loader/style";

describe("Loader styles", () => {
  it("renders LoaderContainer correctly", () => {
    const { container } = render(<LoaderContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders LogoWrapper correctly", () => {
    const { container } = render(<LogoWrapper isMounted />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders LogoWrapper correctly", () => {
    const { container } = render(<LogoWrapper isMounted={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
