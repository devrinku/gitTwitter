import {
  GET_ALL_POSTS,
  GET_SINGLE_POST,
  ADD_POST,
  DELETE_POST,
  GET_MY_POSTS,
  UPDATE_POST,
  POST_ERROR,
  GET_LIKE_CREDENTIAL,
  CLEAR_LIKES,
  CLEAR_POSTS,
  LIKE_A_POST,
  CLEAR_CURRENT_POST,
  SET_CURRENT_POST,
} from "./../constants";

const initialState = {
  posts: [],
  singlePost: null,
  myPosts: [],
  error: null,
  currentPost: null,
  likesInfo: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case ADD_POST:
      return {
        ...state,
        myPosts: [...state.myPosts, payload],
        posts: [...state.posts, payload],
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: payload,
      };
    case CLEAR_CURRENT_POST:
      return {
        ...state,
        currentPost: null,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((elem) => elem._id !== payload),
        myPosts: state.myPosts.filter((elem) => elem._id !== payload),
      };
    case CLEAR_LIKES:
      return {
        ...state,
        likesInfo: null,
      };
    case GET_MY_POSTS:
      return {
        ...state,
        myPosts: payload,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
      };
    case LIKE_A_POST:
    case UPDATE_POST:
      return {
        ...state,
        myPosts: state.myPosts.map((elem) =>
          elem._id.toString() === payload.id.toString()
            ? payload.res.data.data
            : elem
        ),
        posts: state.posts.map((elem) =>
          elem._id.toString() === payload.id.toString()
            ? payload.res.data.data
            : elem
        ),
      };
    case GET_LIKE_CREDENTIAL:
      return {
        ...state,
        likesInfo: payload,
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: [],
        singlePost: null,
        myPosts: [],
        error: null,
        likesInfo: null,
      };
    default:
      return state;
  }
};
