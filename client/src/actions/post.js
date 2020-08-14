import {
  GET_ALL_POSTS,
  GET_SINGLE_POST,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  POST_ERROR,
} from "./../constants";
import axios from "axios";

export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/post");
    dispatch({
      type: GET_ALL_POSTS,
      payload: res.data.data,
    });
  } catch (error) {
    if (error && error.response && error.response.statusText) {
      dispatch({
        type: POST_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    } else {
      console.log(error);
    }
  }
};
