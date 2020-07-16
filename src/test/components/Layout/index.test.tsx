/* eslint-disable react/no-children-prop */
import React from "react";
import { render, screen, RouterCntxt } from "~/test/utils/index";
import Layout from "~/components/Layout";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("Layout component", () => {
  it("renders Layout correctly", async () => {
    const { asFragment } = render(
      <RouterCntxt>
        <Layout children={<div>render div</div>} />
      </RouterCntxt>
    );

    expect(asFragment()).toMatchSnapshot();

    // render div must be found in the document
    const children = screen.getByText("render div");
    expect(children).toBeInTheDocument();
  });
});
