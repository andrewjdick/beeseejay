import styled from "styled-components";

export const Container = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
`;

export const Spinner = styled.img`
  width: 100%;
  height: auto;
  animation: ${({ isLoading }) =>
    isLoading ? "spinning 1.4s infinite linear 1s" : "none"};

  @keyframes spinning {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
