import {
  SHOW_MENU_BAR,
  HIDE_MENU_BAR,
  SHOW_SIDE_DRAWER,
  HIDE_SIDE_DRAWER,
} from "./../constants";

const initialState = {
  menubar: false,
  sideDrawer: false,
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
    default:
      return state;
  }
};
