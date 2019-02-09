import { fetchRequest, FETCH_TYPES } from "api/fetchRequest";

const IDEAS_ENDPOINT_URL = "ideas";

export const getIdeas = () =>
  fetchRequest({
    url: IDEAS_ENDPOINT_URL,
    method: FETCH_TYPES.GET
  });

export const addIdea = () => {
  fetchRequest({
    url: IDEAS_ENDPOINT_URL,
    method: FETCH_TYPES.POST
  });
};

export const updateIdea = (id, param) =>
  fetchRequest({
    url: `${IDEAS_ENDPOINT_URL}/${id}`,
    method: FETCH_TYPES.PUT,
    body: { ...param }
  });

export const deleteIdea = id =>
  fetchRequest({
    url: `${IDEAS_ENDPOINT_URL}/${id}`,
    method: FETCH_TYPES.DELETE
  });
