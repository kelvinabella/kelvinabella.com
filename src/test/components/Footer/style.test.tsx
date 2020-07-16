import React from "react";
import { render } from "~/test/utils/index";
import "jest-styled-components";

import FooterContainer from "~/components/Footer/style";

describe("Footer styles", () => {
  it("renders FooterContainer correctly", () => {
    const { container } = render(<FooterContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
