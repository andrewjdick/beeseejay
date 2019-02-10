import React from "react";
import { arrayOf, shape, string } from "prop-types";

export const Select = ({ options, ...props }) => (
  <select {...props}>
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  options: arrayOf(
    shape({
      value: string,
      label: string
    })
  ).isRequired()
};
