import React from "react";
import brandLogo from "assets/images/logo.png";
import { Container, Spinner } from "./styles";

export const Loading = ({ isLoading, ...props }) => (
  <Container {...props}>
    <Spinner
      src={brandLogo}
      alt="BCG Digital Ventures logo"
      isLoading={isLoading}
    />
  </Container>
);
