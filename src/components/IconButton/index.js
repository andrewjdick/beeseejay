import React from "react";
import { Button } from "./styles";

export const IconButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);
