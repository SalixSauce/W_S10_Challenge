import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    filterSize: 'All',
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    toggleSizeFilter: (state, action) => {
      state.filterSize = action.payload;
    },
    toggleShowAllOrders: (state) => {
      state.filterSize = 'All';
    },
  },
});

export const { setOrders, toggleSizeFilter, toggleShowAllOrders } = ordersSlice.actions;

export default ordersSlice.reducer; // Default export for the reducer
