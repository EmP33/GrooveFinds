import { createSlice } from "@reduxjs/toolkit";

import { commerce } from "../lib/commerce";

const initialState = {
  formType: "",
  cart: [],
  sendingStatus: false,
  updateStatus: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFormType(state, action) {
      state.formType = action.payload;
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
    changeSendingStatus(state) {
      state.sendingStatus = !state.sendingStatus;
    },
    changeUpdateStatus(state) {
      state.updateStatus = !state.updateStatus;
    },
  },
});

export const addCartData = (productId, quantity) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const { cart } = await commerce.cart.add(productId, quantity);
      dispatch(userActions.setCart(cart));
    };
    dispatch(userActions.changeSendingStatus());
    await sendRequest();
    dispatch(userActions.changeSendingStatus());
  };
};

export const updateCartData = (productId, quantity) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const { cart } = await commerce.cart.update(productId, { quantity });
      dispatch(userActions.setCart(cart));
    };

    dispatch(userActions.changeUpdateStatus());
    await sendRequest();
    dispatch(userActions.changeUpdateStatus());
  };
};

export const removeFromCartData = (productId) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const { cart } = await commerce.cart.remove(productId);
      dispatch(userActions.setCart(cart));
    };

    dispatch(userActions.changeSendingStatus());
    await sendRequest();
    dispatch(userActions.changeSendingStatus());
  };
};

export const userActions = userSlice.actions;
export default userSlice;
