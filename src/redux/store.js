import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/slices/cartSlice'
import userReducer from './reducers/slices/userSlice'
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
export default store;
