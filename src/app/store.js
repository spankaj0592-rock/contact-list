import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/contact/userSlice';
export const store = configureStore({
  reducer: {
   user:userSlice
  },
});
