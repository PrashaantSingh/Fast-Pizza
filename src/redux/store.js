import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/slices/cartSlice'
const store = configureStore({
  reducer: {
    // user: userReducer,
    cart: cartReducer,
  },
});
export default store;
