import React from "react";
import { render } from "~/test/utils/index";
import "jest-styled-components";
import LogoContainer from "~/components/Logo/style";

describe("Logo styles", () => {
  it("renders LogoContainer correctly", () => {
    const { container } = render(<LogoContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
