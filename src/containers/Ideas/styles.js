import styled from "styled-components";
import { IconButton } from "components/IconButton";
import { PlusIcon } from "components/icons/PlusIcon";
import { Select } from "components/inputs/Select";
import { Loading } from "components/Loading";
import { media } from "media.js";

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
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 1em;
`;

export const Logo = styled.img`
  width: 40px;
  height: auto;
`;

export const PlusIconButton = styled(IconButton)`
  margin-right: 10px;
`;
export const StyledPlusIcon = styled(PlusIcon)`
  &:hover {
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.8);
  }
`;

export const StyledLoading = styled(Loading)`
  margin-left: 10px;
`;

export const IdeaContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 1em;

  /* Ensures momentum scrolling on iOS */
  -webkit-overflow-scrolling: touch;

  ${media.tablet`
    display: block;
  `}
`;

export const UtilityContainer = styled.div`
  margin: 1em 0;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
    flex-direction: row;
    align-items: baseline;
  `}
`;

export const SelectLabel = styled.label`
  margin: 0 0 10px;
  color: whitesmoke;

  ${media.tablet`
    margin: 0 10px 10px;
  `}
`;

export const StyledSelect = styled(Select)`
  position: relative;
  top: -2px;
`;

export const IdeaInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
