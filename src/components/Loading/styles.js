import styled from "styled-components";

export const Container = styled.div`
  width: 40px;
  height: 40px;
`;

export const Spinner = styled.img`
  width: 100%;
  height: auto;
  animation: spinning 1.4s infinite linear;

  @keyframes spinning {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
