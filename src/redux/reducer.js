import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchProducts,
  fetchNextPage,
  fetchFilteredProducts,
} from './operations';
import { getCurrentProducts } from './auth/authOperations';
import { changeFilter } from './actions';

const products = createReducer([], {
  [fetchProducts.fulfilled]: (_, { payload }) => payload,
  [getCurrentProducts.fulfilled]: (_, { payload }) => payload,
  [fetchNextPage.fulfilled]: (_, { payload }) => payload,
  [fetchFilteredProducts.fulfilled]: (_, { payload }) => payload,
});

const filter = createReducer([], {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchProducts.pending]: () => true,
  [fetchProducts.fulfilled]: () => false,
  [fetchProducts.rejected]: () => false,
  [fetchNextPage.pending]: () => true,
  [fetchNextPage.fulfilled]: () => false,
  [fetchNextPage.rejected]: () => false,
  [fetchFilteredProducts.pending]: () => true,
  [fetchFilteredProducts.fulfilled]: () => false,
  [fetchFilteredProducts.rejected]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  products,
  filter,
  loading,
  error,
});
