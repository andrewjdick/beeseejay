import React from "react";
import renderer from "react-test-renderer";
import { Loading } from "components/Loading";

it("renders correctly", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders loading correctly", () => {
  const tree = renderer.create(<Loading isLoading={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
