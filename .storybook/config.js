import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

const Block = styled.div``;

const GlobalStyle = createGlobalStyle`
  html, body, div#root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  div#root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0.8);
  }
`;

// Search the src/ directory for all story.js files
const req = require.context("../src", true, /story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

function Stage(story) {
  return (
    <Fragment>
      <GlobalStyle />
      <Block>{story()}</Block>
    </Fragment>
  );
}

// Add a generic stage container for each story
addDecorator(Stage);

// add `knobs` capability to any story
addDecorator(withKnobs);

configure(loadStories, module);
