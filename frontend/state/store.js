import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './ordersSlice'; // Import the default reducer
import { ordersApi } from './ordersApi';

export const resetStore = () =>
  configureStore({
    reducer: {
      ordersState: ordersReducer, // Add your orders reducer
      [ordersApi.reducerPath]: ordersApi.reducer, // Add RTK Query API reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ordersApi.middleware), // Add RTK Query middleware
  });

export const store = resetStore();
