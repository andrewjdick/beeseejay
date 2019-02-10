import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { NewIdeaButton, NewIdeaPlusIcon } from "../styles";
import { Idea } from "./";

storiesOf("Containers/Ideas/Idea", module)
  .add("default", () => (
    <Idea
      id="abcde-12345-fghij-67890"
      dateCreated={new Date().getTime()}
      title={text("title")}
      body={text("body")}
      onIdeaDeleteClick={action("Idea deleted")}
      onIdeaUpdate={action("Idea updating")}
    />
  ))
  .add("new idea", () => (
    <NewIdeaButton onClick={action("add new idea")}>
      <NewIdeaPlusIcon />
    </NewIdeaButton>
  ));
