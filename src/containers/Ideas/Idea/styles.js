import styled, { css } from "styled-components";
import { Input } from "components/inputs/Input";
import { TextArea } from "components/inputs/TextArea";
import { TrashIcon } from "components/icons/TrashIcon";
import { CheckmarkIcon } from "components/icons/CheckmarkIcon";
import { media } from "media.js";

export const CARD_DIMENSION = 150;
export const CARD_SPACING = 10;

export const baseCardStyles = css`
  height: ${CARD_DIMENSION}px;
  width: ${CARD_DIMENSION}px;
  margin: ${CARD_SPACING}px;
  padding: ${CARD_SPACING}px;
  border-radius: 5px;
`;

export const StyledTrashIcon = styled(TrashIcon)`
  opacity: 0;
  pointer-events: none;
  transition: opacity 100ms linear;
  padding: 10px;
  box-sizing: content-box;

  ${media.tablet`
    padding: 0;
  `};
`;

export const Container = styled.div`
  ${baseCardStyles};

  width: 100%;
  height: ${CARD_DIMENSION * 1.5}px;
  box-shadow: rgba(200, 200, 200, 0.5) 0px 2px 4px;
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

  &:last-child {
    margin-bottom: 2em;
  }

  ${media.tablet`
    width: ${CARD_DIMENSION}px;
    height: ${CARD_DIMENSION}px;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`;

export const StyledInput = styled(Input)`
  font-weight: bold;
`;

export const StyledTextArea = styled(TextArea)`
  flex: 1;
  resize: none;
  margin-top: 5px;
  padding: 5px;
`;

export const Counter = styled.span`
  padding: 10px;
  font-size: 1.1rem;
  color: ${({ charactersRemaining }) =>
    charactersRemaining <= 5 ? "red" : "orange"};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  ${media.tablet`
    padding: 0 5px;
  `};
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 25px;

  ${media.tablet`
    margin-top: 5px;
  `};
`;

export const StyledCheckmarkIcon = styled(CheckmarkIcon).attrs(
  ({ isChecked }) => ({
    width: isChecked ? 16 : 0,
    height: isChecked ? 16 : 0
  })
)`
  color: green;
  margin-left: 0;
  transition: all 250ms linear;

  ${({ isChecked }) => css`
    margin-left: 7px;
  `}
`;
