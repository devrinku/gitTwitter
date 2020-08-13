import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_ERROR,
  SET_LOADING_PROFILE,
  SET_CURRENT_PROFILE,
  GET_FOLLOWERS,
  GET_FOLLOWINGS,
  CLEAR_CURRENT_PROFILE,
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

export const addEducation = (formData, id, param, history) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.post(`/api/v1/profile/${id}/education`, formData, config);

    if (param === true) {
      history(false);
      dispatch(getMyProfile());
      toast(`Education Added`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    } else {
      history.push("/create/experienceform");
      toast(`Education Added`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    }
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

export const addExperience = (formData, id, param, history) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.post(`/api/v1/profile/${id}/experience`, formData, config);

    if (param === true) {
      history(false);
      dispatch(getMyProfile());
      toast(`Experience Added`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    } else {
      history.push("/create/uploadimage");
      toast(`Experience Added`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    }
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

export const setCurrentProfile = (formData) => {
  return {
    type: SET_CURRENT_PROFILE,
    payload: formData,
  };
};

export const updateProfile = (formData, history) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await axios.put(
      `/api/v1/profile/${formData._id}`,
      formData,
      config
    );

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    history.push("/dashboard/profile");
    toast(`Profile Updated`, {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "Toastify__progress-bar--dark",
    });

    dispatch({
      type: CLEAR_CURRENT_PROFILE,
    });
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

export const deleteExperience = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/experience/${id}`);
    dispatch(getMyProfile());
    toast(`Experience Deleted`, {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "Toastify__progress-bar--dark",
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

export const deleteEducation = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/education/${id}`);
    dispatch(getMyProfile());
    toast(`Education Deleted`, {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "Toastify__progress-bar--dark",
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
