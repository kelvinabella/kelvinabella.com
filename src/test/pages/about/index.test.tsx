import React from "react";
import { render, RouterCntxt } from "~/test/utils/index";
import About from "~/pages/about";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("About page", () => {
  it("renders About correctly", async () => {
    const { asFragment } = render(
      <RouterCntxt>
        <About />
      </RouterCntxt>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
