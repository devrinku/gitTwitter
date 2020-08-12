import axios from "axios";
import {
  GET_PROFILE,
  GET_EXPERIENCE,
  GET_EDUCATION,
  PROFILE_ERROR,
  SET_LOADING_PROFILE,
  ADD_EDUCATION,
  ADD_EXPERIENCE,
  SET_CURRENT_PROFILE,
  GET_FOLLOWERS,
  GET_FOLLOWINGS,
} from "./../constants";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const setLoading = () => {
  return {
    type: SET_LOADING_PROFILE,
  };
};

export const getMyProfile = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    let res = await axios.get("/api/v1/profile/user/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data.data,
    });
  } catch (error) {
    if (error && error.response && error.response.statusText) {
      dispatch({
        type: PROFILE_ERROR,
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

export const createProfile = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await axios.post("/api/v1/profile", formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data.data,
    });

    toast(`Profile Created`, {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "Toastify__progress-bar--dark",
    });
    history.push("/create/educationform");
  } catch (error) {
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
    } else if (error && error.response && error.response.statusText) {
      dispatch({
        type: PROFILE_ERROR,
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

export const addEducation = (formData, id, history) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.post(`/api/v1/profile/${id}/education`, formData, config);
    toast(`Education Added`, {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "Toastify__progress-bar--dark",
    });
    history.push("/create/experienceform");
  } catch (error) {
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
    } else if (error && error.response && error.response.statusText) {
      dispatch({
        type: PROFILE_ERROR,
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

export const addExperience = (formData, id, history) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.post(`/api/v1/profile/${id}/experience`, formData, config);
    toast(`Experience Added`, {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "Toastify__progress-bar--dark",
    });
    history.push("/create/uploadimage");
  } catch (error) {
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
    } else if (error && error.response && error.response.statusText) {
      dispatch({
        type: PROFILE_ERROR,
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

export const getFriends = (id, type) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/profile/${id}/${type}`);

    if (type === "followers") {
      dispatch({
        type: GET_FOLLOWERS,
        payload: res.data.data,
      });
    }
    if (type === "followings") {
      dispatch({
        type: GET_FOLLOWINGS,
        payload: res.data.data,
      });
    }
  } catch (error) {
    if (error && error.response && error.response.statusText) {
      dispatch({
        type: PROFILE_ERROR,
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
