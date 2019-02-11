import React from "react";
import renderer from "react-test-renderer";
import { Input } from "./Input";
import { Select } from "./Select";
import { TextArea } from "./TextArea";

it("renders input correctly", () => {
  const input = renderer.create(<Input />).toJSON();
  expect(input).toMatchSnapshot();
});

it("renders select correctly", () => {
  const select = renderer
    .create(<Select options={[{ key: "123", value: "456" }]} />)
    .toJSON();
  expect(select).toMatchSnapshot();
});

it("renders textArea correctly", () => {
  const textArea = renderer.create(<TextArea />).toJSON();
  expect(textArea).toMatchSnapshot();
});
