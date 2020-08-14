import { combineReducers } from "redux";
import utils from "./utils";
import auth from "./auth";
import profile from "./profile";
import post from "./post";

export default combineReducers({
  utils,
  auth,
  profile,
  post,
});
