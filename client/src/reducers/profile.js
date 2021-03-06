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
  GET_SUGGESTIONS,
  GITHUB_ERROR,
  CLEAR_FOLLOWINGS,
  CLEAR_FOLLOWERS,
  GET_A_SINGLE_PROFILE,
  CLEAR_A_NOTIFICATION,
  CLEAR_SINGLE_PROFILE,
  SEARCH_PROFILES,
  GITHUB_CLEAR,
} from "./../constants";

const initialState = {
  loggedProfile: null,
  currentProfile: null,
  profiles: null,
  otherProfile: null,
  repos: null,
  followers: null,
  followings: null,
  loadingProfile: false,
  error: {},
  search: [],
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
    case CLEAR_A_NOTIFICATION:
      return {
        ...state,
        loggedProfile: payload,
      };
    case SEARCH_PROFILES:
      return {
        ...state,
        search: payload,
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
    case GET_A_SINGLE_PROFILE:
      return {
        ...state,
        otherProfile: payload,
      };
    case CLEAR_SINGLE_PROFILE:
      return {
        ...state,
        otherProfile: null,
      };
    case GITHUB_CLEAR:
      return {
        ...state,
        repos: null,
      };
    case GET_SUGGESTIONS:
      return {
        ...state,
        profiles: payload.res.filter((profile) => profile._id !== payload.id),
      };
    case CLEAR_FOLLOWERS:
      return {
        ...state,
        followers: null,
      };
    case CLEAR_FOLLOWINGS:
      return {
        ...state,
        followings: null,
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
        followers: null,
        search: [],
        otherProfile: null,
        followings: null,
        loadingProfile: false,
        error: {},
        notifyUsers: null,
        progress: false,
      };
    default:
      return state;
  }
};
