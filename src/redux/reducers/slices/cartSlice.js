import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: [], totalPrice: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.totalPrice += action.payload.unitPrice * 10;
    },
    removeFromCart: (state, action) => {
      const item = state.items.find((pizza) => pizza.id === action.payload);
      if (item) {
        state.items = state.items.filter(
          (pizza) => pizza.id !== action.payload
        );
        state.totalPrice -= Math.max(0, item.unitPrice * 10 * item.quantity);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    increaseItemQuantity: (state, action) => {
      const target = state.items.find((item) => item.id === action.payload.id);
      target && target.quantity++;
      state.totalPrice += target.unitPrice * 10;
    },
    decreaseItemQuantity: (state, action) => {
      const target = state.items.find((item) => item.id === action.payload.id);
      if (target && target.quantity > 1) {
        target.quantity--;
        state.totalPrice -= target.unitPrice * 10;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
