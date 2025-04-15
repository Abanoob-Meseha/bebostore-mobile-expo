import { tCartProduct, tProduct } from "@/assets/types";
import { createSlice } from "@reduxjs/toolkit";

type tCartState = {
  cartProducts: tCartProduct[];
  totalPrice: number;
};
const initialState: tCartState = {
  cartProducts: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product }: { product: tProduct } = action.payload;
      // 1- add product to cartProducts State
      state.cartProducts.push({ ...product, count: 1 });
      // 2- Update total price
      state.totalPrice += product.price;
    },
    increaseProductCount: (state, action) => {
      const { productId } = action.payload;
      // search and increase count
      [...state.cartProducts].map((product: tCartProduct) => {
        if (product.id === productId) {
          product.count++;
          // update totalPrice
          state.totalPrice += product.price;
        }
      });
    },
    decreaseProductCount: (state, action) => {
        const { productId } = action.payload;
        // search and increase count
        [...state.cartProducts].map((product: tCartProduct) => {
          if (product.id === productId) {
            product.count--;
            // update totalPrice
            state.totalPrice -= product.price;
          }
        });
      },
  },
});

export default cartSlice.reducer;
export const {addToCart , increaseProductCount , decreaseProductCount} = cartSlice.actions;
