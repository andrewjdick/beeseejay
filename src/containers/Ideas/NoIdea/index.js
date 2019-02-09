import React from "react";
import { Container, InnerContainer, Title, Subtitle } from "./styles";

export const NoIdea = ({ isFirstLoad, ...props }) => (
  <Container>
    {isFirstLoad ? (
      <InnerContainer>
        <Title>Loading....</Title>
        <Subtitle>We're just preparing your cards</Subtitle>
      </InnerContainer>
    ) : (
      <InnerContainer>
        <Title>You currently have no cards</Title>
        <Subtitle>Click the add icon to get started</Subtitle>
      </InnerContainer>
    )}
  </Container>
);
