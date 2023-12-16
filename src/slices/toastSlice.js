/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  head: null,
  title: null,
  style: null,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    toastShowSuccess: (state, { payload }) => {
      state.show = true;
      state.head = 'toast.success';
      state.title = payload;
      state.style = 'success';
    },
    toastShowError: (state, { payload }) => {
      state.show = true;
      state.head = 'toast.error';
      state.title = payload;
      state.style = 'danger';
    },
    toastHide: () => initialState,
  },
});

export const { actions } = toastSlice;
export default toastSlice.reducer;
