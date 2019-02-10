import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { NoIdea } from "./index";
import { action } from "@storybook/addon-actions/dist/preview";

storiesOf("Containers/Ideas/NoIdea", module).add("no card text", () => (
  <NoIdea
    isFirstLoad={boolean("is first load?", true)}
    onIdeaAddClick={action("create new idea")}
  />
));
