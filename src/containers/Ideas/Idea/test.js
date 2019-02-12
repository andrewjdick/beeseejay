import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import { Idea } from ".";
import { CHECKMARK_WIDTH } from "./styles";

const IDEA_PROPS = {
  id: "1234-abcd-5678-efgh-9101",
  dateCreated: 1549985336574,
  isUpdated: false,
  title: "Test title",
  description: "Test description"
};

// Snapshot testing
it("Idea card renders correctly", () => {
  const input = renderer.create(<Idea {...IDEA_PROPS} />).toJSON();
  expect(input).toMatchSnapshot();
});

// Integration testing
it("displays the update notification when isUpdated is set to true", () => {
  const { rerender, queryByTestId } = render(<Idea {...IDEA_PROPS} />);
  const updatedProps = {
    ...IDEA_PROPS,
    isUpdated: true
  };

  expect(queryByTestId("update-success")).toHaveAttribute("width", "0");

  rerender(<Idea {...updatedProps} />);

  expect(queryByTestId("update-success")).toHaveAttribute(
    "width",
    `${CHECKMARK_WIDTH}`
  );
});

it("renders the correct elements", () => {
  const { queryByTestId } = render(<Idea {...IDEA_PROPS} />);
  expect(queryByTestId("input-title")).toBeDefined();
  expect(queryByTestId("input-description")).toBeDefined();
  expect(queryByTestId("action-delete")).toBeDefined();
  expect(queryByTestId("char-counter")).toBeDefined();
  expect(queryByTestId("update-success")).toBeDefined();
});

/**
 * ToDo: Update tests to use Enzyme
 * The tests below fail because react-testing-library is unable to focus the body, which is a necessary condition for
 * displaying the counter. https://github.com/kentcdodds/react-testing-library/issues/276#issuecomment-460962901
 **/

// it("displays the trash icon on hover", () => {
//   const { queryByTestId, container } = render(<Idea {...IDEA_PROPS} />);
//   expect(queryByTestId("action-delete")).toHaveStyle("opacity: 0");
//   fireEvent.mouseOver(container);
//   expect(queryByTestId("action-delete")).toHaveStyle("opacity: 1");
// });

// it("displays the character counter when body legnth exceeds threshold", () => {
//   const { queryByTestId, rerender } = render(<Idea {...IDEA_PROPS} />);
//   const updatedProps = {
//     ...IDEA_PROPS,
//     description:
//       "This is a description that will be used to test the total number of characters, and display a counter in the bottom left when it is close to max"
//   };
//
//   expect(queryByTestId("char-counter")).toHaveStyle("visibility: hidden");
//   rerender(<Idea {...updatedProps} />);
//   fireEvent.focus(queryByTestId("input-description"))
//   expect(queryByTestId("char-counter")).toHaveStyle("visibility: visible");
// });
