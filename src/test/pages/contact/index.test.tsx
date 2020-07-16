import React from "react";
import { render, RouterCntxt } from "~/test/utils/index";
import Contact from "~/pages/contact";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("Contact page", () => {
  it("renders Contact correctly", async () => {
    const { asFragment } = render(
      <RouterCntxt>
        <Contact />
      </RouterCntxt>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
