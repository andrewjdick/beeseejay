import React from "react";
import brandLogo from "assets/images/logo.png";
import { Container, Spinner } from "./styles";

export const Loading = props => (
  <Container {...props}>
    <Spinner src={brandLogo} alt="Loading..." />
  </Container>
);
