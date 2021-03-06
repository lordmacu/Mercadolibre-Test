import config from "../../config/config.json";

export const FETCH_SEARCH_REQUEST = "FETCH_SEARCH_REQUEST";
export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS";
export const FETCH_SEARCH_ERROR = "FETCH_SEARCH_ERROR";

export const fetchSearchData = () => {
  return {
    type: FETCH_SEARCH_REQUEST,
  };
};

export const fetchSearchSuccess = (search) => {
  return {
    type: FETCH_SEARCH_SUCCESS,
    payload: search,
  };
};

export const fetchSearchError = (error) => {
  return {
    type: FETCH_SEARCH_ERROR,
    payload: error,
  };
};
const goToError = (id) => {
  window.location.href = "/error";
};

const fetchSearch = (query) => {
  return (dispatch) => {
    if (query.length > 0) {
      dispatch(fetchSearchSuccess());
      fetch(`${config.api}/api/items?q=${query}`, { method: "POST" })
        .then((response) => response.json())
        .then((data) =>
          dispatch(fetchSearchSuccess(data.data.results.slice(0, 4)))
        )
        .catch((error) => {
          goToError();
        });
    }
  };
};

export default fetchSearch;
