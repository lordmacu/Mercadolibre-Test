const {
  FETCH_TIEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_ERROR,
} = require("../actions/itemAction");

const initialState = {
  loading: false,
  info: null,
  error: "",
};

const item = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TIEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ITEM_SUCCESS:
      return {
        loading: false,
        info: action.payload,
        error: "",
      };
    case FETCH_ITEM_ERROR:
      return {
        loading: false,
        error: action.payload,
        result: null,
      };
    default:
      return state;
  }
};
export default item;
