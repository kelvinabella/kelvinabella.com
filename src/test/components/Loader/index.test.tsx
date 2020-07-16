import React from "react";
import { render } from "~/test/utils/index";
import Loader from "~/components/Loader";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("Loader component", () => {
  it("renders Loader correctly", () => {
    window.scrollTo = jest.fn();
    const loaderMock = jest.fn();
    const { asFragment } = render(<Loader hideLoader={loaderMock} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
