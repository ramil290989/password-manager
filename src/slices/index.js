import { configureStore } from '@reduxjs/toolkit';
import passwordsReducer from './passwordsSlice.js';
import modalsReducer from './modalsSlice.js';
import toastReducer from './toastSlice.js';

export default configureStore({
  reducer: {
    passwords: passwordsReducer,
    modals: modalsReducer,
    toast: toastReducer,
  },
});
