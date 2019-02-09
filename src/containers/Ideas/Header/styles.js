import styled from "styled-components";
import { PlusIcon } from "components/icons/PlusIcon";

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgb(239, 239, 239);
  background-color: white;
`;

export const HeaderInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 1em;
`;

export const Logo = styled.img`
  width: 40px;
  height: auto;
`;

export const StyledPlusIcon = styled(PlusIcon)`
  &:hover {
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.8);
  }
`;
