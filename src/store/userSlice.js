import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formType: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFormType(state, action) {
      state.formType = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
