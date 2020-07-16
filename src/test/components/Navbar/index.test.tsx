import React from "react";
import { render, RouterCntxt } from "~/test/utils/index";
import Navbar from "~/components/Navbar";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("Navbar component", () => {
  it("renders Navbar correctly", () => {
    const { asFragment } = render(
      <RouterCntxt>
        <Navbar />
      </RouterCntxt>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
