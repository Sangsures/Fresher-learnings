// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';  // Ensure this path is correct

export const store = configureStore({
  reducer: rootReducer,
});
