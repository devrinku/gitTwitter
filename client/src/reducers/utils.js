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
  SHOW_COMPONENT,
  CLOSE_COMPONENT,
  SHOW_DASHBOARD,
  HIDE_DASHBOARD,
} from "./../constants";

const initialState = {
  menubar: false,
  sideDrawer: false,
  backdrop: false,
  modal: false,
  backdropType: null,
  component: false,
  componentType: null,
  dashboard: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_COMPONENT:
      return {
        ...state,
        component: payload.param,
        componentType: payload.type,
      };
    case SHOW_DASHBOARD:
      return {
        ...state,
        dashboard: true,
      };
    case HIDE_DASHBOARD:
      return {
        ...state,
        dashboard: false,
      };
    case CLOSE_COMPONENT:
      return {
        ...state,
        component: payload.param,
        componentType: payload.type,
      };
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
    case SHOW_MODAL:
      return {
        ...state,
        modal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: false,
      };
    case SET_BACKDROP_TYPE:
      return {
        ...state,
        backdropType: payload,
      };
    default:
      return state;
  }
};
