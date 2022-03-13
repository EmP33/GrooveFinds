import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFormModal(state) {
      state.isOpenModal = !state.isOpenModal;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
