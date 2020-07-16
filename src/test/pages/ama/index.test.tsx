import React from "react";
import { render, RouterCntxt } from "~/test/utils/index";
import AMA from "~/pages/ama";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("AMA page", () => {
  it("renders AMA correctly", async () => {
    const { asFragment } = render(
      <RouterCntxt>
        <AMA />
      </RouterCntxt>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
