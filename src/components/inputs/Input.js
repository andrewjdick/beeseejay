import React from "react";
import { StyledInput } from "./styles";

export const Input = ({ type, ...props }) => (
  <StyledInput type={type} {...props} />
);

Input.defaultProps = {
  type: "text"
};
