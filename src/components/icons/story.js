import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { CloseIcon } from "./CloseIcon";
import { PlusIcon } from "./PlusIcon";
import { TrashIcon } from "./TrashIcon";
import { action } from "@storybook/addon-actions";

export const iconSizeOptions = {
  range: true,
  min: 0,
  max: 200,
  step: 1
};

storiesOf("Components/icons", module)
  .add("CloseIcon", () => (
    <CloseIcon
      width={number("width", 150, iconSizeOptions)}
      height={number("height", 150, iconSizeOptions)}
      onClick={action("icon clicked")}
    />
  ))
  .add("PlusIcon", () => (
    <PlusIcon
      width={number("width", 150, iconSizeOptions)}
      height={number("height", 150, iconSizeOptions)}
      onClick={action("icon clicked")}
    />
  ))
  .add("TrashIcon", () => (
    <TrashIcon
      width={number("width", 150, iconSizeOptions)}
      height={number("height", 150, iconSizeOptions)}
      onClick={action("icon clicked")}
    />
  ));
