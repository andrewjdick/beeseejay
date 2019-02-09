import styled, { css } from "styled-components";
import { media } from "media.js";

const baseInputStyles = css`
  outline: none;
  padding: 5px;
  border: none;
  background-color: transparent;

  &:focus {
    border: 1px solid grey;
  }
`;

export const StyledInput = styled.input`
  ${baseInputStyles};

  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.6rem;

  ${media.tablet`
    font-size: 1rem;
    line-height: 1.2rem;
  `}
`;

export const StyledTextArea = styled.textarea`
  ${baseInputStyles};

  font-size: 1.1rem;
  line-height: 1.2rem;

  ${media.tablet`
    font-size: 0.8rem;
    line-height: 0.9rem;
  `}

  ${media.desktop`
    font-size: 0.75rem;
    line-height: 0.85rem;
  `}
`;
