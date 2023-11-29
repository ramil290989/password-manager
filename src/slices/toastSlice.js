import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  head: null,
  title: null,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    toastShow: (state, {payload}) => {
      state.show = true;
      state.head = payload.head;
      state.title = payload.title;
    },
    toastHide: () => initialState,
  },
});

export const { actions } = toastSlice;
export default toastSlice.reducer;
