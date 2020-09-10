const {
  FETCH_ITEM_DESCRIPTION_REQUEST,
  FETCH_ITEM_DESCRIPTION_SUCCESS,
  FETCH_ITEM_DESCRIPTION_ERROR,
} = require("../actions/itemDescriptionAction");

const initialState = {
  loading: false,
  text: null,
  error: "",
};

const description = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM_DESCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ITEM_DESCRIPTION_SUCCESS:
      return {
        loading: false,
        text: action.payload,
        error: "",
      };
    case FETCH_ITEM_DESCRIPTION_ERROR:
      return {
        loading: false,
        error: action.payload,
        description: null,
      };
    default:
      return state;
  }
};
export default description;
