import React from "react";
// This will snapshot only the difference between the first render, and the
// state of the DOM after the click event.
// See https://github.com/jest-community/snapshot-diff
import { toMatchDiffSnapshot } from "snapshot-diff";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "~/test/utils/index";
import DarkModeIcon from "~/components/DarkModeIcon";

expect.extend({ toMatchDiffSnapshot });

// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
describe("Dark mode icon component", () => {
  it("renders DarkModeIcon correctly", () => {
    const { asFragment } = render(<DarkModeIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  // https://kentcdodds.com/blog/test-isolation-with-react
  it("renders the proper icon depending whether dark mode localstorage value is true or false", () => {
    const { asFragment } = render(<DarkModeIcon />);
    const firstRender = asFragment();

    const removeItem = jest.spyOn(Storage.prototype, "removeItem");
    const setItem = jest.spyOn(Storage.prototype, "setItem");

    // local storage removeItem should be called
    localStorage.removeItem("darkMode");
    expect(removeItem).toHaveBeenCalled();

    // local storage value must be null
    expect(localStorage.getItem("darkMode")).toEqual(null);

    // renders the sun icon on local storage value of null;
    expect(firstRender).toMatchDiffSnapshot(asFragment());

    // local storage setItem should be called
    localStorage.setItem("darkMode", "true");
    expect(setItem).toHaveBeenCalled();

    // local storage value must be true
    expect(localStorage.getItem("darkMode")).toEqual("true");

    // renders the moon icon on local storage value of true;
    expect(firstRender).toMatchDiffSnapshot(asFragment());

    // local storage setItem should be called
    localStorage.setItem("darkMode", "false");
    expect(setItem).toHaveBeenCalled();

    // local storage value must be false
    expect(localStorage.getItem("darkMode")).toEqual("false");

    // renders the sun icon on local storage value of false;
    expect(firstRender).toMatchDiffSnapshot(asFragment());
  });

  it("renders the proper icon depending whether dark mode state value is true or false", () => {
    render(<DarkModeIcon />);
    const button = screen.getByRole("button");

    // renders the sun icon on initial component render
    expect(button.firstChild).toHaveClass("sun");

    // when clicked, the icon changes to moon
    userEvent.click(button);
    expect(button.firstChild).toHaveClass("moon");

    // when clicked again, the icon changes to sun
    userEvent.click(button);
    expect(button.firstChild).toHaveClass("sun");

    // https://github.com/testing-library/react-testing-library/issues/269
    // when keypress is used, the icon changes to moon
    fireEvent.keyPress(button, {
      key: "Enter",
      code: 13,
      charCode: 13,
    });
    expect(button.firstChild).toHaveClass("moon");
  });
});
