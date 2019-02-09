import React from "react";
import brandLogo from "assets/images/logo.png";
import { Loading } from "components/Loading";
import {
  HeaderWrapper,
  HeaderInnerWrapper,
  Logo,
  StyledPlusIcon
} from "./styles";

export const Header = ({ isFirstLoad, onIdeaAdd, ...props }) => (
  <HeaderWrapper {...props}>
    <HeaderInnerWrapper>
      {isFirstLoad ? (
        <Loading />
      ) : (
        <Logo src={brandLogo} alt="BCG Digital Ventures logo" />
      )}
      <StyledPlusIcon onClick={onIdeaAdd} />
    </HeaderInnerWrapper>
  </HeaderWrapper>
);
