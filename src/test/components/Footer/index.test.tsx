import React from "react";
import { render } from "~/test/utils/index";
import Footer from "~/components/Footer";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("Footer component", () => {
  it("renders Footer correctly", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
