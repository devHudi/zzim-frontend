import { combineReducers } from "redux";
import spinner from "./spinner";
import form from "./form";

const rootReducer = combineReducers({
  spinner,
  form,
});

export default rootReducer;
