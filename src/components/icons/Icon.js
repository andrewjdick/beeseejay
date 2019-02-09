import React from "react";
import { Svg } from "./styles";

export const Icon = ({ width, height, children, ...props }) => (
  <Svg
    id="i-close"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={width}
    height={height}
    fill="none"
    stroke="currentcolor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    {...props}
  >
    {children}
  </Svg>
);

Icon.defaultProps = {
  width: 32,
  height: 32
};
