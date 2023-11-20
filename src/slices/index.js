import { configureStore } from '@reduxjs/toolkit';
import passwordsReducer from './passwordsSlice.js';
import modalsReducer from './modalsSlice.js';

export default configureStore({
  reducer: {
    passwords: passwordsReducer,
    modals: modalsReducer,
  },
});
