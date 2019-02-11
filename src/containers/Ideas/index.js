import React, { Component, Fragment } from "react";
import { debounce } from "throttle-debounce";
import { getIdeas, addIdea, updateIdea, deleteIdea } from "api/endpoints";
import { Idea } from "./Idea";
import { NoIdea } from "./NoIdea";
import {
  HeaderInnerWrapper,
  HeaderWrapper,
  IdeaContainer,
  IdeaInnerContainer,
  NewIdeaButton,
  NewIdeaPlusIcon,
  PlusIconButton,
  SelectContainer,
  SelectLabel,
  StyledLoading,
  StyledSelect,
  StyledPlusIcon,
  UtilityContainer
} from "./styles";

const SORT_OPTIONS = [
  { value: "created_date", label: "Date Created" },
  { value: "title", label: "Title" }
];

export class Ideas extends Component {
  state = {
    ideas: [],
    updatedIdeas: [],
    sortBy: SORT_OPTIONS[0].value,
    isLoading: true,
    isFirstLoad: true
  };

  // Debounce to prevent the user spamming the add icon to make multiple cards.
  handleIdeaAddDebounced = debounce(250, this.handleIdeaAdd);

  // Debounce here prevents the user clicking on the delete icon multiple times
  // the first request would delete the card, future requests would trigger a 404,
  handleIdeaDeleteDebounced = debounce(250, this.handleIdeaDelete);

  componentDidMount() {
    const { ideas, sortBy } = this.getLocalStorage();

    if (ideas && sortBy) {
      this.setState({
        ideas,
        sortBy,
        isFirstLoad: false,
        isLoading: false
      });
    } else {
      this.getLatestIdeas(() => this.setState({ isFirstLoad: false }));
    }

    // Save state to localStorage when user leaves/refreshes the page
    window.addEventListener("beforeunload", () => this.setLocalStorage());
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", () => this.setLocalStorage());
    this.setLocalStorage();
  }

  getLocalStorage() {
    const localIdeas = JSON.parse(localStorage.getItem("ideas"));
    const localSortBy = JSON.parse(localStorage.getItem("sortBy"));
    return { ideas: localIdeas, sortBy: localSortBy };
  }

  setLocalStorage(key, value) {
    const { ideas, sortBy } = this.state;
    localStorage.setItem("ideas", JSON.stringify(ideas));
    localStorage.setItem("sortBy", JSON.stringify(sortBy));
  }

  handleSortIdeas(field) {
    this.setState({ sortBy: field, isLoading: true }, () =>
      this.getLatestIdeas()
    );
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

  // Get the latest ideas from the backend and sort them by either title or created_date.
  // I'm sorting here for the FE challenge, but it would be more efficient to send queryStrings and sort server-side.
  // Once the latest ideas are stored in state, save a copy of them to local storage.
  async getLatestIdeas(cb) {
    const ideas = await getIdeas();

    if (ideas) {
      const sortedIdeas = this.sortIdeas(ideas);
      this.setState({ ideas: sortedIdeas, isLoading: false }, cb);
    }
  }

  // Add the idea to the backend
  async handleIdeaAdd() {
    this.setState({ isLoading: true });

    const newIdea = await addIdea();

    if (newIdea) {
      this.getLatestIdeas();
    }
  }

  // Update an existing idea on the backend, then retrieve the latest list.
  async handleIdeaUpdate(id, value) {
    this.setState({ isLoading: true });

    const { updatedIdeas } = this.state;
    const updatedIdea = await updateIdea(id, value);

    // On a successful response from updateIdea, briefly store the updated idea id to display
    // the notification updated icon on the card.
    if (updatedIdea) {
      this.setState({ updatedIdeas: [...updatedIdeas, updatedIdea.id] }, () => {
        this.getLatestIdeas();
        setTimeout(() => this.setState({ updatedIdeas }), 2000);
      });
    }
  }

  // Delete an existing idea on the backend, then retrieve the latest list.
  async handleIdeaDelete(id) {
    this.setState({ isLoading: true });

    const deletedIdea = await deleteIdea(id);

    if (deletedIdea) {
      this.getLatestIdeas();
    }
  }

  render() {
    const { ideas, updatedIdeas, sortBy, isLoading, isFirstLoad } = this.state;
    const isIdeasEmpty = Boolean(!ideas.length);

    return (
      <Fragment>
        <HeaderWrapper>
          <HeaderInnerWrapper>
            <StyledLoading isLoading={isLoading} />
            <PlusIconButton onClick={() => this.handleIdeaAddDebounced()}>
              <StyledPlusIcon />
            </PlusIconButton>
          </HeaderInnerWrapper>
        </HeaderWrapper>

        {!isIdeasEmpty ? (
          <IdeaContainer>
            <UtilityContainer>
              <SelectContainer>
                <SelectLabel>Sort By:</SelectLabel>
                <StyledSelect
                  defaultValue={sortBy}
                  options={SORT_OPTIONS}
                  onChange={({ target: { value } }) =>
                    this.handleSortIdeas(value)
                  }
                />
              </SelectContainer>
            </UtilityContainer>

            <IdeaInnerContainer isLoading={isLoading}>
              {ideas.map(({ id, created_date, title, body }) => (
                <Idea
                  key={id}
                  id={id}
                  dateCreated={created_date}
                  title={title}
                  body={body}
                  isUpdated={updatedIdeas.includes(id)}
                  onIdeaDeleteClick={id => this.handleIdeaDeleteDebounced(id)}
                  onIdeaUpdate={(id, param) => this.handleIdeaUpdate(id, param)}
                />
              ))}

              <NewIdeaButton onClick={() => this.handleIdeaAddDebounced()}>
                <NewIdeaPlusIcon />
              </NewIdeaButton>
            </IdeaInnerContainer>
          </IdeaContainer>
        ) : (
          <NoIdea
            onIdeaAddClick={() => this.handleIdeaAddDebounced()}
            isFirstLoad={isFirstLoad}
          />
        )}
      </Fragment>
    );
  }
}
