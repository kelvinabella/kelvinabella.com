import React from "react";
import { render, RouterCntxt } from "~/test/utils/index";
import Home from "~/pages/index";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("Home page", () => {
  it("renders Home correctly", async () => {
    const { asFragment } = render(
      <RouterCntxt>
        <Home />
      </RouterCntxt>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
