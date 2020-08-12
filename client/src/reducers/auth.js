import {
  SET_LOADING_AUTH,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  UPLOAD_PHOTO,
  LOGOUT,
} from "./../constants";

const initialState = {
  token: localStorage.getItem("token"),
  loadingAuth: null,
  user: null,
  isLoggedIn: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING_AUTH:
      return {
        ...state,
        loadingAuth: true,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
      };
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        loadingAuth: false,
        isLoggedIn: true,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        token: null,
        loadingAuth: false,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
