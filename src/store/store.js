import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modalSlice";
import productSlice from "./productsSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    products: productSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
