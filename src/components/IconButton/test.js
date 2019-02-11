import React from "react";
import renderer from "react-test-renderer";
import { IconButton } from ".";
import { PlusIcon } from "components/icons/PlusIcon";

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
