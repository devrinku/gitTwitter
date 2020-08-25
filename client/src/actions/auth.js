import {
  SET_LOADING_AUTH,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  CLEAR_PROFILE,
  CHANGE_PASSWORD,
  SET_FETCH,
  UNSET_FETCH,
  SET_PROGRESS,
  CLEAR_POSTS,
  UNSET_PROGRESS,
  LOGOUT,
} from "./../constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";

export const setLoading = () => {
  return {
    type: SET_LOADING_AUTH,
  };
};
export const loadUser = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }

  try {
    const res = await axios.get("/api/v1/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register = (formData) => async (dispatch) => {
  dispatch(setLoading());
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    let res = await axios.post("/api/v1/auth/register", formData, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.data,
    });
    dispatch(loadUser());
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
    } else {
      console.log(error);
      toast(`Network Error ,Please try after some time`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (formData) => async (dispatch) => {
  dispatch(setLoading());

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    let res = await axios.post("/api/v1/auth/login", formData, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });
    dispatch(loadUser());
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
    } else {
      console.log(error);
      toast(`Network Error ,Please try after some time`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: CLEAR_POSTS });
};

export const uploadDP = (data, history) => async (dispatch) => {
  dispatch({
    type: SET_PROGRESS,
  });
  const formData = new FormData();
  formData.append("file", data);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    await axios.put("/api/v1/auth/uploadprofileimage", formData, config);
    dispatch(loadUser());
    history.push("/dashboard/profile");

    dispatch({
      type: UNSET_PROGRESS,
    });
  } catch (error) {
    dispatch({
      type: UNSET_PROGRESS,
    });
    if (error.response && error.response.data && error.response.data.error) {
      toast(`${error.response.data.error}`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    } else {
      console.log(error);
      toast(`Image not uploaded,try after sometime`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    }
  }
};

export const deleteDP = (history) => async (dispatch) => {
  dispatch({
    type: SET_FETCH,
  });
  try {
    await axios.delete("/api/v1/auth/deleteprofileimage");
    dispatch(loadUser());
    history.push("/dashboard/profile");
    toast(`Profile Image Deleted`, {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "Toastify__progress-bar--dark",
    });
    dispatch({
      type: UNSET_FETCH,
    });
  } catch (error) {
    dispatch({
      type: UNSET_FETCH,
    });
    console.log(error);
    toast(`Image not deleted,try after sometime`, {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "Toastify__progress-bar--dark",
    });
  }
};

export const changePassword = (data, history) => async (dispatch) => {
  dispatch({
    type: SET_FETCH,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    let res = await axios.post("/api/v1/auth/changepassword", data, config);
    dispatch({
      type: CHANGE_PASSWORD,
      payload: res.data.data,
    });
    dispatch(loadUser());
    history.push("/dashboard/profile");
    toast(`Password changed successfully`, {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "Toastify__progress-bar--dark",
    });
    dispatch({
      type: UNSET_FETCH,
    });
  } catch (error) {
    dispatch({
      type: UNSET_FETCH,
    });
    if (error.response && error.response.data && error.response.data.error) {
      toast(`${error.response.data.error}`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    } else {
      console.log(error);
      toast(`Password not changed,try after sometime`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    }
  }
};

export const unsetFetch = () => {
  return {
    type: UNSET_FETCH,
  };
};

export const forgotpassword = (form, history) => async (dispatch) => {
  dispatch({
    type: SET_FETCH,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.put("/api/v1/auth/forgotpassword", form, config);
    history.push("/resetpassword");
    dispatch({
      type: UNSET_FETCH,
    });
  } catch (error) {
    dispatch({
      type: UNSET_FETCH,
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
      toast(`Network Error ,Please try after some time`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const resetpassword = (form, salt, history) => async (dispatch) => {
  dispatch({
    type: SET_FETCH,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.put(`/api/v1/auth/resetpassword/${salt}`, form, config);
    history.push("/login");
    toast("Reset password successfull", {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "Toastify__progress-bar--dark",
    });
    dispatch({
      type: UNSET_FETCH,
    });
  } catch (error) {
    dispatch({
      type: UNSET_FETCH,
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
      toast(`Network Error ,Please try after some time`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
