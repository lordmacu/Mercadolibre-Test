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

const fetchItem = (query) => {
  return (dispatch) => {
    dispatch(fetchItemData());
    fetch(`https://api.mercadolibre.com/items/${query}`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchItemSuccess(data)))
      .catch((error) => {
        dispatch(fetchItemError(error));
      });
  };
};
export const cleanItem = (data) => {
  return (dispatch) => {
    dispatch(fetchItemSuccess(null));
  };
};

export default fetchItem;
