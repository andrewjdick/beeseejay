import React from "react";
import renderer from "react-test-renderer";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import { Loading } from "components/Loading";

// Snapshot testing
it("renders correctly", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Unit testing
it("renders an image element", () => {
  const { container } = render(<Loading />);
  expect(container.querySelector("img")).toBeTruthy();
});

it("renders the brand logo", () => {
  const { container } = render(<Loading />);
  expect(container.querySelector("img")).toHaveAttribute("src", "logo.png");
});
