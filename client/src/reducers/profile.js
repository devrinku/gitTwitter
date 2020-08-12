import {
  GET_PROFILE,
  GET_EXPERIENCE,
  GET_EDUCATION,
  PROFILE_ERROR,
  SET_LOADING_PROFILE,
  ADD_EDUCATION,
  ADD_EXPERIENCE,
  CLEAR_PROFILE,
  SET_CURRENT_PROFILE,
  GET_FOLLOWERS,
  GET_FOLLOWINGS,
} from "./../constants";

const initialState = {
  loggedProfile: null,
  currentProfile: null,
  profiles: [],
  repos: [],
  followers: [],
  followings: [],
  loadingProfile: false,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING_PROFILE:
      return {
        ...state,
        loadingProfile: true,
      };
    case GET_PROFILE:
      return {
        ...state,
        loggedProfile: payload,
        loadingProfile: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        loadingProfile: false,
        error: payload,
      };
    case GET_FOLLOWERS:
      return {
        ...state,
        followers: payload,
      };
    case GET_FOLLOWINGS:
      return {
        ...state,
        followings: payload,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        loggedProfile: null,
        currentProfile: null,
        profiles: [],
        repos: [],
        followers: [],
        followings: [],
        loadingProfile: false,
        error: {},
      };
    default:
      return state;
  }
};
