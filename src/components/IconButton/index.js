import React from "react";
import { node } from "prop-types";
import { Button } from "./styles";

export const IconButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

IconButton.propTypes = {
  children: node.isRequired()
};
