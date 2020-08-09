import {
  SHOW_MENU_BAR,
  HIDE_MENU_BAR,
  SHOW_SIDE_DRAWER,
  HIDE_SIDE_DRAWER,
  SHOW_BACKDROP,
  HIDE_BACKDROP,
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
