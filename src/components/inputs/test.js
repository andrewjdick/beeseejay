import React from "react";
import renderer from "react-test-renderer";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import { Input } from "./Input";
import { Select } from "./Select";
import { TextArea } from "./TextArea";

const SELECT_OPTIONS = [
  { key: "123", value: "456" },
  { key: "abc", value: "def" }
];

// Snapshot testing
it("Input renders correctly", () => {
  const input = renderer.create(<Input />).toJSON();
  expect(input).toMatchSnapshot();
});

it("Select renders correctly", () => {
  const select = renderer.create(<Select options={SELECT_OPTIONS} />).toJSON();
  expect(select).toMatchSnapshot();
});

it("TextArea renders correctly", () => {
  const textArea = renderer.create(<TextArea />).toJSON();
  expect(textArea).toMatchSnapshot();
});

// Unit testing
it("Input renders an input element", () => {
  const { container } = render(<Input />);
  expect(container.querySelector("input")).toBeTruthy();
});

it("Select renders a select element", () => {
  const { container } = render(<Select options={SELECT_OPTIONS} />);
  expect(container.querySelector("select")).toBeTruthy();
});

it("TextArea renders an textarea element", () => {
  const { container } = render(<TextArea />);
  expect(container.querySelector("textarea")).toBeTruthy();
});

it("TextArea defaults to a max length of 150 characters", () => {
  const { container } = render(<TextArea />);
  expect(container.querySelector("textarea")).toHaveAttribute(
    "maxlength",
    "150"
  );
});
