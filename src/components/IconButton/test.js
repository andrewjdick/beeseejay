import React from "react";
import renderer from "react-test-renderer";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import { PlusIcon } from "components/icons/PlusIcon";
import { IconButton } from ".";

// Snapshot testing
it("renders correctly", () => {
  const tree = renderer
    .create(
      <IconButton>
        <PlusIcon />
      </IconButton>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

// Unit testing
it("renders a button element", () => {
  const { container } = render(
    <IconButton>
      <PlusIcon />
    </IconButton>
  );
  expect(container.querySelector("button")).toBeTruthy();
});
