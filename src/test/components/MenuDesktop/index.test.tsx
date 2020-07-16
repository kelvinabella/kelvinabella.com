import React from "react";
import { render, RouterCntxt } from "~/test/utils/index";
import MenuDesktop from "~/components/MenuDesktop";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("MenuDesktop component", () => {
  it("renders MenuDesktop correctly", () => {
    const { asFragment } = render(
      <RouterCntxt>
        <MenuDesktop />
      </RouterCntxt>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
