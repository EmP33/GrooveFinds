import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
  showWishlist: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleShowMenu(state) {
      state.showMenu = !state.showMenu;
    },
    toggleShowWishlist(state) {
      state.showWishlist = !state.showWishlist;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
