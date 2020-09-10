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

const fetchItemDescription = (query) => {
  return (dispatch) => {
    dispatch(fetchItemDescriptionData());
    fetch(`https://api.mercadolibre.com/items/${query}/description`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchItemDescriptionSuccess(data.plain_text)))
      .catch((error) => {
        dispatch(fetchItemDescriptionError(error));
      });
  };
};

export default fetchItemDescription;
