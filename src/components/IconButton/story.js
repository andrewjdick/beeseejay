import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { IconButton } from "components/IconButton";
import { PlusIcon } from "components/icons/PlusIcon";
import { iconSizeOptions } from "components/icons/story";

storiesOf("Components/IconButton", module).add("with children", () => (
  <IconButton onClick={action("button clicked!")}>
    <PlusIcon
      width={number("width", 150, iconSizeOptions)}
      height={number("height", 150, iconSizeOptions)}
    />
  </IconButton>
));
