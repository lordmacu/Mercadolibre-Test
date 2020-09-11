import config from "../../config/config.json";

export const FETCH_ITEM_DESCRIPTION_REQUEST = "FETCH_ITEM_DESCRIPTION_REQUEST";
export const FETCH_ITEM_DESCRIPTION_SUCCESS = "FETCH_ITEM_DESCRIPTION_SUCCESS";
export const FETCH_ITEM_DESCRIPTION_ERROR = "FETCH_ITEM_DESCRIPTION_ERROR";

export const fetchItemDescriptionData = () => {
  return {
    type: FETCH_ITEM_DESCRIPTION_REQUEST,
  };
};

export const fetchItemDescriptionSuccess = (search) => {
  return {
    type: FETCH_ITEM_DESCRIPTION_SUCCESS,
    payload: search,
  };
};

export const fetchItemDescriptionError = (error) => {
  return {
    type: FETCH_ITEM_DESCRIPTION_ERROR,
    payload: error,
  };
};
const goToError = (id) => {
  window.location.href = "/error";
};


const fetchItemDescription = (query) => {
  return (dispatch) => {
    dispatch(fetchItemDescriptionData());
    fetch(`${config.api}/api/items/${query}/description`,{ method:"POST"})
      .then((response) => response.json())
      .then((data) => dispatch(fetchItemDescriptionSuccess(data.data.plain_text)))
      .catch((error) => {
        goToError();
      });
  };
};

export default fetchItemDescription;
