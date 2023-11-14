import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const passwordsAdapter = createEntityAdapter();

const initialState = passwordsAdapter.getInitialState({
  loadingStatus: 'loading',
  error: null,
});

const passwordSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {
    addPassword: passwordsAdapter.addOne,
    changePassword: passwordsAdapter.upsertOne,
    removePassword: passwordsAdapter.removeOne,
  },
});

export const selectors = passwordsAdapter.getSelectors((state) => state.passwords);
export const { actions } = passwordSlice;
export default passwordSlice.reducer;
