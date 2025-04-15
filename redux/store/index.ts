import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "@/redux/slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart : CartSlice ,
  },
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
