import config from "../../config/config.json";

export const FETCH_TIEM_REQUEST = "FETCH_TIEM_REQUEST";
export const FETCH_ITEM_SUCCESS = "FETCH_ITEM_SUCCESS";
export const FETCH_ITEM_ERROR = "FETCH_ITEM_ERROR";

export const fetchItemData = () => {
  return {
    type: FETCH_TIEM_REQUEST,
  };
};

export const fetchItemSuccess = (item) => {
  return {
    type: FETCH_ITEM_SUCCESS,
    payload: item,
  };
};

export const fetchItemError = (error) => {
  return {
    type: FETCH_ITEM_ERROR,
    payload: error,
  };
};

const goToError = (id) => {
  window.location.href = "/error";
};


const fetchItem = (query) => {
  return (dispatch) => {
    dispatch(fetchItemData());
    fetch(`${config.api}/api/items/${query}`,{ method:"POST"})
      .then((response) => response.json())
      .then((data) => dispatch(fetchItemSuccess(data.data)))
      .catch((error) => {
        goToError();
      });
  };
};
export const cleanItem = (data) => {
  return (dispatch) => {
    dispatch(fetchItemSuccess(null));
  };
};

export default fetchItem;
