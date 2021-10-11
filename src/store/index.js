import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// console.log(cartReducer);

const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
  },
});

export default store;
