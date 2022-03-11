import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
  showDetails: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleShowMenu(state) {
      state.showMenu = !state.showMenu;
    },
    toggleShowDetails(state) {
      state.showDetails = !state.showDetails;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
