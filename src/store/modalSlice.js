import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleShowMenu(state) {
      state.showMenu = !state.showMenu;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
