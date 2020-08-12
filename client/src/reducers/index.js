import { combineReducers } from "redux";
import utils from "./utils";
import auth from "./auth";
import profile from "./profile";

export default combineReducers({
  utils,
  auth,
  profile,
});
