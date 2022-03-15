import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  isLoading: true,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
