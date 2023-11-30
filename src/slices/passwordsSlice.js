import { createAsyncThunk ,createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import apiRoutes from '../apiRoutes.js';
import axios from 'axios';

export const getPasswords = createAsyncThunk(
  'loadPasswords',
  async (token) => {
    const authHeader = { headers: { Authorization: token } };
    const path = apiRoutes.data();
    const response = await axios.get(path, authHeader);
    return response.data;
  }
);

const passwordsAdapter = createEntityAdapter();

const initialState = passwordsAdapter.getInitialState({
  loadingStatus: 'loading',
  error: null,
});

const passwordSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {
    resetData: () => initialState,
    addPassword: passwordsAdapter.addOne,
    removePassword: passwordsAdapter.removeOne,
    updatePassword: passwordsAdapter.updateOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPasswords.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(getPasswords.fulfilled, (state, action) => {
        passwordsAdapter.addMany(state, action.payload);
        state.loadingStatus = 'idle';
        state.error = null;
      })
      .addCase(getPasswords.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error.message;
      })
  }
});

export const selectors = passwordsAdapter.getSelectors((state) => state.passwords);
export const { actions } = passwordSlice;
export default passwordSlice.reducer;
