import styled from "styled-components";
import { TextArea } from "components/inputs/TextArea";
import { TrashIcon } from "components/icons/TrashIcon";
import { media } from "media.js";

const CARD_DIMENSION = 150;

export const StyledTrashIcon = styled(TrashIcon)`
  opacity: 0;
  pointer-events: none;
  transition: opacity 100ms linear;
`;

export const Container = styled.div`
  width: 100%;
  height: ${CARD_DIMENSION * 1.5}px;
  box-shadow: rgba(200, 200, 200, 0.5) 0px 2px 4px;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  position: relative;

  &:hover {
    ${StyledTrashIcon} {
      opacity: 1;
      pointer-events: auto;
    }
  }

  ${media.tablet`
    width: ${CARD_DIMENSION}px;
    height: ${CARD_DIMENSION}px;
  `}
`;

export const StyledTextArea = styled(TextArea)`
  flex: 1;
  min-width: 100%;
  max-width: 100%;
  resize: none;
  margin: 5px 0;
  padding: 5px;
`;

export const Counter = styled.div`
  color: ${({ charactersRemaining }) =>
    charactersRemaining <= 5 ? "red" : "orange"};
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
