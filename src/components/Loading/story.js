import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { Loading } from "./index";

storiesOf("Components/Loading", module).add("default", () => (
  <Loading isLoading={boolean("is loading?", false)} />
));
