import React from "react";
import { bool, func } from "prop-types";
import { Container, InnerContainer, Title, Subtitle } from "./styles";
import { NewIdeaButton, NewIdeaPlusIcon } from "../styles";

export const NoIdea = ({ isFirstLoad, onIdeaAddClick, ...props }) => (
  <Container>
    {isFirstLoad ? (
      <InnerContainer>
        <Title>Loading....</Title>
        <Subtitle>We're just preparing your cards</Subtitle>
      </InnerContainer>
    ) : (
      <InnerContainer>
        <NewIdeaButton onClick={() => onIdeaAddClick()}>
          <NewIdeaPlusIcon />
        </NewIdeaButton>
        <Title>You currently have no cards</Title>
        <Subtitle>Click the add icon to get started</Subtitle>
      </InnerContainer>
    )}
  </Container>
);

NoIdea.propTypes = {
  isFirstLoad: bool,
  onIdeaAddClick: func
};
