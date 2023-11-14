import { configureStore } from '@reduxjs/toolkit';
import passwordsReducer from './passwordsSlice.js';

export default configureStore({
  reducer: {
    passwords: passwordsReducer,
  },
});
