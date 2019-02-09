import React, { Component, Fragment } from "react";
import { debounce } from "throttle-debounce";
import { getIdeas, addIdea, updateIdea, deleteIdea } from "api/endpoints";
import { Header } from "./Header";
import { Idea } from "./Idea";
import { NoIdea } from "./NoIdea";
import {
  IdeaContainer,
  IdeaInnerContainer,
  UtilityContainer,
  SelectContainer,
  SelectLabel,
  StyledSelect
} from "./styles";

const SORT_OPTIONS = [
  { value: "created_date", label: "Date Created" },
  { value: "title", label: "Title" }
];

export class Ideas extends Component {
  state = {
    ideas: [],
    sortBy: SORT_OPTIONS[0].value,
    isLoading: true,
    isFirstLoad: true
  };

  // Debounce to prevent the user spamming the add icon to make multiple cards.
  handleIdeaAddDebounced = debounce(200, this.handleIdeaAdd);

  // Debounce here prevents the user clicking on the delete icon multiple times
  // the first request would delete the card, future requests would trigger a 404,
  // since the card has been deleted on the backend.
  handleIdeaDeleteDebounced = debounce(300, this.handleIdeaDelete);

  async componentDidMount() {
    // check local storage to see if ideas object exists
    const localIdeas = JSON.parse(localStorage.getItem("ideas"));

    // If local state exists, display those cards.
    if (localIdeas) {
      this.setState({
        ideas: localIdeas,
        isLoading: false,
        isFirstLoad: false
      });
    }

    // If not, make a fresh get request
    await this.getLatestIdeas();
    this.setState({ isFirstLoad: false });
  }

  // Get the latest ideas from the backend and sort them by either title or created_date.
  // I'm sorting here for the FE challenge, but it would be more efficient to send queryStrings and sort server-side.
  // Once the latest ideas are stored in state, save a copy of them to local storage.
  async getLatestIdeas() {
    const ideas = await getIdeas();
    const sortedIdeas = this.sortIdeas(ideas);
    this.setState({ ideas: sortedIdeas, isLoading: false });
    localStorage.setItem("ideas", JSON.stringify(sortedIdeas));
  }

  // Add the idea to the backend, then retrieve the latest list.
  async handleIdeaAdd() {
    this.setState({ isLoading: true });
    await addIdea();
    this.getLatestIdeas();
  }

  // Update an existing idea on the backend, then retrieve the latest list.
  async handleIdeaUpdate(id, value) {
    this.setState({ isLoading: true });
    await updateIdea(id, value);
    this.getLatestIdeas();
  }

  // Delete an existing idea on the backend, then retrieve the latest list.
  async handleIdeaDelete(id) {
    this.setState({ isLoading: true });
    await deleteIdea(id);
    this.getLatestIdeas();
  }

  handleSortIdeas(field) {
    this.setState({ sortBy: field }, () => this.getLatestIdeas());
  }

  // Sort ideas with the native sort() method. I'd usually use sortBy() from the Lodash library.
  sortIdeas(ideas) {
    const { sortBy } = this.state;
    let sortedIdeas = ideas;

    if (sortBy === "title") {
      sortedIdeas = ideas.sort((a, b) => {
        // Newly created ideas will have undefined fields. Fallback to an empty string if they do not yet exist.
        const nameA = a[sortBy] ? a[sortBy].toUpperCase() : "";
        const nameB = b[sortBy] ? b[sortBy].toUpperCase() : "";
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });
    }

    if (sortBy === "created_date") {
      sortedIdeas = ideas.sort((a, b) => a[sortBy] - b[sortBy]);
    }

    return sortedIdeas;
  }

  render() {
    const { ideas, isLoading, isFirstLoad } = this.state;
    const isIdeasEmpty = Boolean(!ideas.length);

    return (
      <React.Fragment>
        <Header
          isFirstLoad={isFirstLoad}
          onIdeaAdd={() => this.handleIdeaAddDebounced()}
        />

        {!isIdeasEmpty ? (
          <Fragment>
            <UtilityContainer>
              <SelectContainer>
                <SelectLabel>Sort By:</SelectLabel>
                <StyledSelect
                  defaultValue={SORT_OPTIONS[0].value}
                  options={SORT_OPTIONS}
                  onChange={({ target: { value } }) =>
                    this.handleSortIdeas(value)
                  }
                />
              </SelectContainer>
            </UtilityContainer>

            <IdeaContainer>
              <IdeaInnerContainer isLoading={isLoading}>
                {ideas.map(({ id, created_date, title, body }) => (
                  <Idea
                    key={id}
                    id={id}
                    dateCreated={created_date}
                    title={title}
                    body={body}
                    onIdeaDeleteClick={id => this.handleIdeaDeleteDebounced(id)}
                    onIdeaUpdate={(id, param) =>
                      this.handleIdeaUpdate(id, param)
                    }
                  />
                ))}
              </IdeaInnerContainer>
            </IdeaContainer>
          </Fragment>
        ) : (
          <NoIdea isFirstLoad={isFirstLoad} />
        )}
      </React.Fragment>
    );
  }
}
