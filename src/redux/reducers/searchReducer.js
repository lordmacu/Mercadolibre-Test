const {
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_ERROR,
} = require("../actions/searchAction");

const initialState = {
  loading: false,
  search: [],
  error: "",
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SEARCH_SUCCESS:
      return {
        loading: false,
        result: action.payload,
        error: "",
      };
    case FETCH_SEARCH_ERROR:
      return {
        loading: false,
        error: action.payload,
        result: [],
      };
    default:
      return state;
  }
};
export default search;
