import {
  SET_LOADING_AUTH,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  UPLOAD_PHOTO,
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
export const loadUser = (formData) => async (dispatch) => {
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

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
