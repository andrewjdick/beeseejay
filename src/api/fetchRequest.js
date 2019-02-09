export const FETCH_TYPES = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE"
};

const BASE_URL = "https://beeseejay-api.herokuapp.com/api";

function onFetchResponse(response) {
  if (!response.ok) {
    throw new Error("There was a problem with the fetch request");
  }

  return response.json();
}

export function fetchRequest({ url, method = "GET", body = {}, headers = {} }) {
  if (!url) {
    throw new Error("url is undefined");
  }

  const requestUrl = `${BASE_URL}/${url}`;

  const requestHeaders = {
    "content-type": "application/json",
    ...headers
  };

  // Do not add the body to a GET request
  const requestBody =
    method !== FETCH_TYPES.GET ? JSON.stringify(body) : undefined;

  return fetch(requestUrl, {
    method,
    body: requestBody,
    headers: requestHeaders
  })
    .then(onFetchResponse)
    .catch(error => console.error(error));
}
