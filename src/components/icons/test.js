import React from "react";
import renderer from "react-test-renderer";
import { CheckmarkIcon } from "./CheckmarkIcon";
import { CloseIcon } from "./CloseIcon";
import { PlusIcon } from "./PlusIcon";
import { TrashIcon } from "./TrashIcon";

it("renders all icons correctly", () => {
  const checkmarkIcon = renderer.create(<CheckmarkIcon />).toJSON();
  const closeIcon = renderer.create(<CloseIcon />).toJSON();
  const plusIcon = renderer.create(<PlusIcon />).toJSON();
  const trashIcon = renderer.create(<TrashIcon />).toJSON();

  expect(checkmarkIcon).toMatchSnapshot();
  expect(closeIcon).toMatchSnapshot();
  expect(plusIcon).toMatchSnapshot();
  expect(trashIcon).toMatchSnapshot();
});
