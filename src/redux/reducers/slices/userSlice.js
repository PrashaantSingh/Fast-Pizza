import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { setName, setPhone, setAddress } = userSlice.actions;
export default userSlice.reducer;
