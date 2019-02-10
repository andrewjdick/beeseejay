import styled from "styled-components";
import { PlusIcon } from "components/icons/PlusIcon";
import { baseCardStyles } from "containers/Ideas/Idea/styles";
import { media } from "media.js";

export const StyledPlusIcon = styled(PlusIcon)`
  color: rgba(200, 200, 200, 0.6);
`;

export const Container = styled.button`
  ${baseCardStyles};

  display: none;
  outline: none;
  border: 1px dashed rgba(200, 200, 200, 0.6);
  background-color: transparent;
  transition: all 200ms linear;

  &:hover {
    border-color: rgba(200, 200, 200, 0.8);
    box-shadow: 0px 0px 5px 2px rgba(200, 200, 200, 0.2);

    ${StyledPlusIcon} {
      color: rgba(200, 200, 200, 0.8);
    }
  }

  &:active {
    border-color: rgb(200, 200, 200);
    transform: scale(0.95);

    ${StyledPlusIcon} {
      color: rgb(200, 200, 200);
    }
  }

  ${media.tablet`
    display: inline-block;
  `};
`;
