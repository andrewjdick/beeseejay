import styled from "styled-components";

export const Svg = styled.svg`
  color: rgba(0, 0, 0, 0.6);
  transition: all 200ms ease-in;

  &:active {
    transform: scale(0.9);
    color: rgb(0, 0, 0);
  }

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;
