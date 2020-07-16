import React from "react";
import { render } from "~/test/utils/index";
import CatInSpace from "~/components/Icons/CatInSpace";
import Contact from "~/components/Icons/Contact";
import Github from "~/components/Icons/Github";
import Gmail from "~/components/Icons/Gmail";
import Hamburger from "~/components/Icons/Hamburger";
import LinkedIn from "~/components/Icons/LinkedIn";
import Loader from "~/components/Icons/Loader";
import Logo from "~/components/Icons/Logo";
import OpenLink from "~/components/Icons/OpenLink";

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("Icons component", () => {
  it("renders CatInSpace correctly", () => {
    const { asFragment } = render(<CatInSpace />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Contact correctly", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Github correctly", () => {
    const { asFragment } = render(<Github />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders Gmail correctly", () => {
    const { asFragment } = render(<Gmail />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders Hamburger correctly", () => {
    const { asFragment } = render(<Hamburger />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders LinkedIn correctly", () => {
    const { asFragment } = render(<LinkedIn />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders Loader correctly", () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders Logo correctly", () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders OpenLink correctly", () => {
    const { asFragment } = render(<OpenLink />);
    expect(asFragment()).toMatchSnapshot();
  });
});
