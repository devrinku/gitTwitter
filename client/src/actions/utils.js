import {
  SHOW_MENU_BAR,
  HIDE_MENU_BAR,
  SHOW_SIDE_DRAWER,
  HIDE_SIDE_DRAWER,
  SHOW_BACKDROP,
  HIDE_BACKDROP,
  SHOW_MODAL,
  SET_BACKDROP_TYPE,
  HIDE_MODAL,
} from "./../constants";

export const showMenuBar = () => {
  return {
    type: SHOW_MENU_BAR,
  };
};

export const hideMenuBar = () => {
  return {
    type: HIDE_MENU_BAR,
  };
};

export const showSideDrawer = () => {
  return {
    type: SHOW_SIDE_DRAWER,
  };
};

export const hideSideDrawer = () => {
  return {
    type: HIDE_SIDE_DRAWER,
  };
};

export const showBackDrop = () => {
  return {
    type: SHOW_BACKDROP,
  };
};

export const hideBackDrop = () => {
  return {
    type: HIDE_BACKDROP,
  };
};

export const showModal = () => {
  return {
    type: SHOW_MODAL,
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

export const setBackdropType = (backdropType) => {
  return {
    type: SET_BACKDROP_TYPE,
    payload: backdropType,
  };
};
