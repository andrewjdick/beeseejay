import React from "react";
import renderer from "react-test-renderer";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import { CheckmarkIcon } from "./CheckmarkIcon";
import { Icon } from "./Icon";
import { CloseIcon } from "./CloseIcon";
import { PlusIcon } from "./PlusIcon";
import { TrashIcon } from "./TrashIcon";

// Snapshot Testing
it("renders CheckmarkIcon correctly", () => {
  const tree = renderer.create(<CheckmarkIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders CloseIcon correctly", () => {
  const tree = renderer.create(<CloseIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders PlusIcon correctly", () => {
  const tree = renderer.create(<PlusIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders TrashIcon correctly", () => {
  const tree = renderer.create(<TrashIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Unit Testing
it("Icon defaults to a height and width of 32", () => {
  const { container } = render(
    <Icon>
      <PlusIcon />
    </Icon>
  );

  expect(container.querySelector("svg")).toHaveAttribute("width", "32");
  expect(container.querySelector("svg")).toHaveAttribute("height", "32");
});

it("CheckmarkIcon renders an svg element", () => {
  const { container } = render(<CheckmarkIcon />);
  expect(container.querySelector("svg")).toBeTruthy();
});

it("CloseIcon renders an svg element", () => {
  const { container } = render(<CloseIcon />);
  expect(container.querySelector("svg")).toBeTruthy();
});

it("PlusIcon renders an svg element", () => {
  const { container } = render(<PlusIcon />);
  expect(container.querySelector("svg")).toBeTruthy();
});

it("TrashIcon renders an svg element", () => {
  const { container } = render(<TrashIcon />);
  expect(container.querySelector("svg")).toBeTruthy();
});
