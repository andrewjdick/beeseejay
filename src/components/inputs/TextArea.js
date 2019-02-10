import React from "react";
import { string } from "prop-types";
import { StyledTextArea } from "./styles";

export const MAX_CHARACTER_COUNT = "150";

export const TextArea = ({ maxLength, ...props }) => (
  <StyledTextArea maxLength={maxLength} {...props} />
);

TextArea.defaultProps = {
  maxLength: MAX_CHARACTER_COUNT
};

TextArea.propTypes = {
  maxLength: string
};
