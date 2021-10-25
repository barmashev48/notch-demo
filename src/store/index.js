import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import filteredItemsReducer from "./filteredItemsSlice";

// console.log(cartReducer);

const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
    filteredItemsReducer: filteredItemsReducer,
  },
});

export default store;
