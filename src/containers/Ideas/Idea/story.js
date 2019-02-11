import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { NewIdeaButton, NewIdeaPlusIcon } from "../styles";
import { Idea } from "./";

storiesOf("Containers/Ideas/Idea", module)
  .add("default", () => (
    <Idea
      id="abcde-12345-fghij-67890"
      dateCreated={new Date().getTime()}
      isUpdated={boolean("update notification", false)}
      onIdeaDeleteClick={action("Idea deleted")}
      onIdeaUpdate={action("Idea updating")}
    />
  ))
  .add("new idea", () => (
    <NewIdeaButton onClick={action("add new idea")}>
      <NewIdeaPlusIcon />
    </NewIdeaButton>
  ));
