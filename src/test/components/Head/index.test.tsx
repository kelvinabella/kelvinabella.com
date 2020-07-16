import React from "react";
import { render } from "~/test/utils/index";
import MainHead from "~/components/Head";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("Head component", () => {
  it("renders Head correctly", async () => {
    const { asFragment } = render(<MainHead />);
    expect(asFragment()).toMatchSnapshot();
  });
});
