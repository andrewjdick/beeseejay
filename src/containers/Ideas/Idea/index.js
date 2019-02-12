import React, { Component } from "react";
import { string, number, bool, func } from "prop-types";
import { TrashIcon } from "components/icons/TrashIcon";
import { Input } from "components/inputs/Input";

import { MAX_CHARACTER_COUNT } from "components/inputs/TextArea";
import {
  Container,
  Counter,
  InfoWrapper,
  TrashIconButton,
  StyledInput,
  StyledTextArea,
  StyledCheckmarkIcon
} from "./styles";

export class Idea extends Component {
  state = {
    title: undefined,
    body: undefined,
    bodyLength: undefined,
    isBodyFocused: false
  };

  // Setting field values on willMount ensures it is an uncontrolled
  // component for the entire lifecycle.
  componentWillMount() {
    const { title, body } = this.props;
    this.setState({
      title: title ? title : "",
      body: body ? body : "",
      bodyLength: body ? body.length : 0
    });
  }

  handleInputBlur(id, param) {
    const { title: prevTitle, body: prevBody, onIdeaUpdate } = this.props;
    const { title, body } = param;

    // Check for type string to allow empty strings to be pushed to the backend
    const isTitleUpdated = typeof title === "string" && title !== prevTitle;
    const isBodyUpdated = typeof body === "string" && body !== prevBody;

    if (param.body) {
      this.setState({ isBodyFocused: false });
    }

    if (isTitleUpdated || isBodyUpdated) {
      onIdeaUpdate(id, param);
    }
  }

  handleTextAreaFocus() {
    this.setState({ isBodyFocused: true });
  }

  render() {
    const { id, dateCreated, isUpdated, onIdeaDeleteClick } = this.props;
    const { title, body, bodyLength, isBodyFocused } = this.state;
    const characterThreshold = 15;
    const charactersRemaining = MAX_CHARACTER_COUNT - bodyLength;
    const isBodyBelowThreshold = charactersRemaining <= characterThreshold;

    return (
      <Container>
        <Input type="hidden" value={id} readOnly />
        <Input type="hidden" value={dateCreated} readOnly />

        <StyledInput
          data-testid="input-title"
          value={title}
          placeholder="Enter a title..."
          onBlur={() => this.handleInputBlur(id, { title })}
          onChange={({ target: { value } }) => this.setState({ title: value })}
          autoFocus
        />

        <StyledTextArea
          data-testid="input-description"
          value={body}
          placeholder="Enter a description..."
          onFocus={() => this.handleTextAreaFocus()}
          onBlur={() => this.handleInputBlur(id, { body })}
          onChange={event =>
            this.setState({
              body: event.target.value,
              bodyLength: event.target.value.length
            })
          }
        />

        <InfoWrapper>
          <TrashIconButton
            data-testid="action-delete"
            onClick={() => onIdeaDeleteClick(id)}
          >
            <TrashIcon width={20} height={20} />
          </TrashIconButton>

          <StyledCheckmarkIcon
            data-testid="update-success"
            isChecked={isUpdated}
          />

          <Counter
            data-testid="char-counter"
            charactersRemaining={charactersRemaining}
            isVisible={isBodyFocused && isBodyBelowThreshold}
          >
            {charactersRemaining}
          </Counter>
        </InfoWrapper>
      </Container>
    );
  }
}

Idea.propTypes = {
  id: string.isRequired,
  dateCreated: number.isRequired,
  title: string,
  body: string,
  isUpdated: bool,
  onIdeaUpdate: func,
  onIdeaDeleteClick: func
};
