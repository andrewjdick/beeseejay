import styled from "styled-components";
import { IconButton } from "components/IconButton";
import { PlusIcon } from "components/icons/PlusIcon";
import { Select } from "components/inputs/Select";
import { Loading } from "components/Loading";
import { baseCardStyles } from "./Idea/styles";
import { media } from "media.js";

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgb(239, 239, 239);
  background-color: white;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.7);
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

  ${media.tablet`
    display: none;
  `};
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
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 1em;

  ${media.tablet`
    display: block;
  `};
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
  `};
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

export const NewIdeaPlusIcon = styled(PlusIcon)`
  color: rgba(200, 200, 200, 0.6);
`;

export const NewIdeaButton = styled.button`
  ${baseCardStyles};

  display: none;
  outline: none;
  border: 1px dashed rgba(200, 200, 200, 0.6);
  background-color: transparent;
  transition: all 200ms linear;

  &:hover {
    border-color: rgba(200, 200, 200, 0.8);
    box-shadow: 0px 0px 5px 2px rgba(200, 200, 200, 0.2);

    ${NewIdeaPlusIcon} {
      color: rgba(200, 200, 200, 0.8);
    }
  }

  &:active {
    border-color: rgb(200, 200, 200);
    transform: scale(0.95);

    ${NewIdeaPlusIcon} {
      color: rgb(200, 200, 200);
    }
  }

  ${media.tablet`
    display: inline-block;
  `};
`;
