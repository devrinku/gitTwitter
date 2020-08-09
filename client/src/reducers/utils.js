import {
  SHOW_MENU_BAR,
  HIDE_MENU_BAR,
  SHOW_SIDE_DRAWER,
  HIDE_SIDE_DRAWER,
  SHOW_BACKDROP,
  HIDE_BACKDROP,
} from "./../constants";

const initialState = {
  menubar: false,
  sideDrawer: false,
  backdrop: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_MENU_BAR:
      return {
        ...state,
        menubar: true,
      };
    case HIDE_MENU_BAR:
      return {
        ...state,
        menubar: false,
      };
    case SHOW_SIDE_DRAWER:
      return {
        ...state,
        sideDrawer: true,
      };
    case HIDE_SIDE_DRAWER:
      return {
        ...state,
        sideDrawer: false,
      };
    case SHOW_BACKDROP:
      return {
        ...state,
        backdrop: true,
      };
    case HIDE_BACKDROP:
      return {
        ...state,
        backdrop: false,
      };
    default:
      return state;
  }
};
