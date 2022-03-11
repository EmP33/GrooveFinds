import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modalSlice";
import productSlice from "./productsSlice";

const store = configureStore({
  reducer: { modal: modalSlice.reducer, products: productSlice.reducer },
});

export default store;
