import {
  GET_ALL_POSTS,
  GET_SINGLE_POST,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  POST_ERROR,
} from "./../constants";

const initialState = {
  posts: null,
  singlePost: null,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
