import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { number, text } from "@storybook/addon-knobs";
import { Input } from "./Input";
import { Select } from "./Select";
import { TextArea } from "./TextArea";

const selectOptions = [
  { value: "created_date", label: "Date Created" },
  { value: "title", label: "Title" }
];

export const textAreaOptions = {
  min: 0,
  max: 150
};

storiesOf("Components/inputs", module)
  .add("Input", () => (
    <Input
      autoFocus
      value={text("value")}
      placeholder={text("placeholder", "Enter text here...")}
      onChange={action("input updated")}
      onBlur={action("input blurred")}
      onFocus={action("input focused")}
    />
  ))
  .add("Select", () => (
    <Select
      autoFocus
      options={selectOptions}
      onChange={action("select updated")}
      onBlur={action("select blurred")}
      onFocus={action("select focused")}
    />
  ))
  .add("TextArea", () => (
    <TextArea
      autoFocus
      value={text("value")}
      placeholder={text("placeholder", "Enter text here...")}
      maxLength={number("max characters", 150, textAreaOptions)}
      onChange={action("text area updated")}
      onBlur={action("text area blurred")}
      onFocus={action("text area focused")}
    />
  ));
