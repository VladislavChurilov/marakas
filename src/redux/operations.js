import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://dummy-api.d0.acom.cloud/api/';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`products?`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchNextPage = createAsyncThunk(
  'products/fetchNextPage',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`products?page=${page}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchFilteredProducts = createAsyncThunk(
  'products/fetchFilteredProducts',
  async (filter, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `products?from=${filter.from}&to=${filter.to}&price_from=${filter.priceFrom}&price_to=${filter.priceTo}&title=${filter.title}`,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
