import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://dummy-api.d0.acom.cloud/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`auth/login?`, credentials);
      token.set(response.data.access_token);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.message === 'Request failed with status code 401'
          ? alert(
              'Sorry, but there is no such user. Check your password or email',
            )
          : alert('Internal server error. Please try later'),
      );
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('auth/logout');
      token.unset();
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getCurrentProducts = createAsyncThunk(
  'auth/getCurrentProducts',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get(`products?`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
