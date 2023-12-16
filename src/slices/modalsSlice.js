/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  window: null,
  id: null,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    modalShow: (state, { payload }) => {
      state.window = payload.window;
      state.id = payload.id;
    },
    modalHide: () => initialState,
  },
});

export const { actions } = modalsSlice;
export default modalsSlice.reducer;
