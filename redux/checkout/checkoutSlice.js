import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkoutData: null,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCheckoutData: (state, action) => {
      state.checkoutData = action.payload;
    },
    clearCheckoutData: (state) => {
      state.checkoutData = null;
    },
  },
});

export const { setCheckoutData, clearCheckoutData } = checkoutSlice.actions;

export default checkoutSlice.reducer;
