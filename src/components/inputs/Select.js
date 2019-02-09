import React from "react";

export const Select = ({ options, ...props }) => (
  <select {...props}>
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);
