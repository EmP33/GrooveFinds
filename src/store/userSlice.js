import { createSlice } from "@reduxjs/toolkit";

import { commerce } from "../lib/commerce";

const initialState = {
  formType: "",
  cart: [],
  wishlist: [],
  sendingStatus: false,
  updateStatus: false,
  checkout: "",
  order: "",
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
    addItemToWishlist(state, action) {
      state.wishlist = [...state.wishlist, ...action.payload];
    },
    removeItemFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter((item) => item !== action.payload);
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
    await sendRequest();
  };
};

export const removeFromCartData = (productId) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const { cart } = await commerce.cart.remove(productId);
      dispatch(userActions.setCart(cart));
    };
    await sendRequest();
  };
};

// export const handleCaptureCheckout = (checkoutTokenId, newOrder) => {
//   return async (dispatch) => {
//     try {
//       const incomingOrder = await commerce.checkout.capture(
//         checkoutTokenId,
//         newOrder
//       );
//       setOrder(incomingOrder);
//       console.log("tutaj");
//       refreshCart();
//     } catch (err) {
//       setErrorMessage(err.data.error.message);
//     }
//   };
// };

export const userActions = userSlice.actions;
export default userSlice;
