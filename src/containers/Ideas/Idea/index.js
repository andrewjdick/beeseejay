import React, { Component } from "react";
import { IconButton } from "components/IconButton";
import { Input } from "components/inputs/Input";
import { MAX_CHARACTER_COUNT } from "components/inputs/TextArea";
import {
  Container,
  Counter,
  InfoWrapper,
  StyledTextArea,
  StyledTrashIcon
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
    const { id, dateCreated, onIdeaDeleteClick } = this.props;
    const { title, body, bodyLength, isBodyFocused } = this.state;
    const characterThreshold = 15;
    const charactersRemaining = MAX_CHARACTER_COUNT - bodyLength;
    const isBodyBelowThreshold = charactersRemaining <= characterThreshold;

    return (
      <Container>
        <Input type="hidden" value={id} readOnly />
        <Input type="hidden" value={dateCreated} readOnly />

        <Input
          value={title}
          placeholder="Enter a title..."
          onBlur={() => this.handleInputBlur(id, { title })}
          onChange={({ target: { value } }) => this.setState({ title: value })}
          autoFocus
        />

        <StyledTextArea
          value={body}
          placeholder="Enter a description..."
          onFocus={() => this.handleTextAreaFocus()}
          onBlur={() => this.handleInputBlur(id, { body })}
          onChange={({ target: { value } }) =>
            this.setState({ body: value, bodyLength: value.length })
          }
        />

        <InfoWrapper>
          <IconButton onClick={() => onIdeaDeleteClick(id)}>
            <StyledTrashIcon width={20} height={20} />
          </IconButton>

          {isBodyFocused && isBodyBelowThreshold && (
            <Counter charactersRemaining={charactersRemaining}>
              {charactersRemaining}
            </Counter>
          )}
        </InfoWrapper>
      </Container>
    );
  }
}
