import React from "react";
import { storiesOf } from "@storybook/react";
import { NoIdea } from "./index";
import { action } from "@storybook/addon-actions/dist/preview";

storiesOf("Containers/Ideas/NoIdea", module)
  .add("no card text", () => (
    <NoIdea isFirstLoad={false} onIdeaAddClick={action("create new idea")} />
  ))
  .add("on first load", () => (
    <NoIdea isFirstLoad={true} onIdeaAddClick={action("create new idea")} />
  ));
