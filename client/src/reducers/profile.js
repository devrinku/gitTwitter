import {
  GET_PROFILE,
  PROFILE_ERROR,
  SET_LOADING_PROFILE,
  CLEAR_PROFILE,
  SET_CURRENT_PROFILE,
  GET_FOLLOWERS,
  GET_FOLLOWINGS,
  CLEAR_CURRENT_PROFILE,
  SET_PROGRESS,
  UNSET_PROGRESS,
  GET_NOTIFY_USERS,
  CLEAR_NOTIFY_USERS,
  GITHUB_REPOS,
  COMMENT_ERROR,
  GITHUB_ERROR,
} from "./../constants";

const initialState = {
  loggedProfile: null,
  currentProfile: null,
  profiles: null,
  repos: null,
  followers: [],
  followings: [],
  loadingProfile: false,
  error: {},
  progress: false,
  notifyUsers: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PROGRESS:
      return {
        ...state,
        progress: true,
      };
    case UNSET_PROGRESS:
      return {
        ...state,
        progress: false,
      };

    case SET_LOADING_PROFILE:
      return {
        ...state,
        loadingProfile: true,
      };
    case GET_NOTIFY_USERS:
      return {
        ...state,
        notifyUsers: payload,
      };
    case CLEAR_NOTIFY_USERS:
      return {
        ...state,
        notifyUsers: [],
      };
    case GET_PROFILE:
      return {
        ...state,
        loggedProfile: payload,
        loadingProfile: false,
      };
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: payload,
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: null,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        loadingProfile: false,
        repos: null,
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
    case GITHUB_REPOS:
      return {
        ...state,
        repos: payload,
      };
    case GITHUB_ERROR:
      return {
        ...state,
        repos: [],
      };

    case CLEAR_PROFILE:
      return {
        ...state,
        loggedProfile: null,
        currentProfile: null,
        profiles: null,
        repos: null,
        followers: [],
        followings: [],
        loadingProfile: false,
        error: {},
        notifyUsers: null,
        progress: false,
      };
    default:
      return state;
  }
};
