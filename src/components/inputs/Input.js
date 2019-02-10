import React from "react";
import { string } from "prop-types";
import { StyledInput } from "./styles";

export const Input = ({ type, ...props }) => (
  <StyledInput type={type} {...props} />
);

Input.defaultProps = {
  type: "text"
};

Input.proptypes = {
  type: string
};
