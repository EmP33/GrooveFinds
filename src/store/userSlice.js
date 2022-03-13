import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
  formType: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFormModal(state, action) {
      state.isOpenModal = !state.isOpenModal;
      state.formType = action.payload;
    },
    toggleFormType(state, action) {
      state.formType = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
