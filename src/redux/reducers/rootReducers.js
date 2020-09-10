import { combineReducers } from "redux";
import search from "./searchReducer";
import item from "./itemReducer";
import description from "./itemDescriptionReducer";

const rootReducers = combineReducers({
  search,
  item,
  description,
});

export default rootReducers;
