import {
  GET_ALL_POSTS,
  GET_SINGLE_POST,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  POST_ERROR,
  GET_LIKE_CREDENTIAL,
  SET_PROGRESS,
  UNSET_PROGRESS,
  CLEAR_LIKES,
  LIKE_A_POST,
  GET_MY_POSTS,
} from "./../constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export const getMyPosts = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/post/profile/${id}`);
    dispatch({
      type: GET_MY_POSTS,
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

export const createPost = (formData, id) => async (dispatch) => {
  dispatch({
    type: SET_PROGRESS,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `/api/v1/profile/${id}/post`,
      formData,
      config
    );
    dispatch({
      type: ADD_POST,
      payload: res.data.data,
    });
    toast(`Post Created`, {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "Toastify__progress-bar--dark",
    });
    dispatch({
      type: UNSET_PROGRESS,
    });
  } catch (error) {
    dispatch({
      type: UNSET_PROGRESS,
    });
    if (error.response && error.response.data && error.response.data.error) {
      const errors = error.response.data.error.split(",");
      if (errors) {
        errors.forEach((error) =>
          toast(`${error}`, {
            className: "black-background",
            bodyClassName: "grow-font-size",
            progressClassName: "Toastify__progress-bar--dark",
          })
        );
      }
    } else {
      console.log(error);
    }
  }
};
export const clearLikes = () => {
  return {
    type: CLEAR_LIKES,
  };
};
export const getLikeCredentials = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/post/${id}/likes`);
    dispatch({
      type: GET_LIKE_CREDENTIAL,
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

export const likeAPost = (id) => async (dispatch) => {
  dispatch({
    type: SET_PROGRESS,
  });
  try {
    const res = await axios.put(`/api/v1/post/${id}/likes`);
    dispatch({
      type: LIKE_A_POST,
      payload: { res, id },
    });
    dispatch({
      type: UNSET_PROGRESS,
    });
  } catch (error) {
    dispatch({
      type: UNSET_PROGRESS,
    });
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
