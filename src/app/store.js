import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/COntactSlice.js/contactSlice';

export const store = configureStore({
  reducer: {
   user: userReducer,
  },
});
