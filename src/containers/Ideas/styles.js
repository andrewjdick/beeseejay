import styled from "styled-components";
import { Select } from "components/inputs/Select";
import { media } from "media.js";

export const IdeaContainer = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden;

  /* Ensures momentum scrolling on iOS */
  -webkit-overflow-scrolling: touch;

  ${media.tablet`
    display: block;
  `}
`;

export const IdeaInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1em;
`;

export const UtilityContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 1em;

  ${media.tablet`
    justify-content: flex-end;
  `}
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  ${media.tablet`
    flex-direction: row;
  `}
`;

export const SelectLabel = styled.label`
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const StyledSelect = styled(Select)`
  position: relative;
  top: -2px;
`;
