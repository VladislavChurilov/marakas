import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { logIn, logOut, getCurrentProducts } from './authOperations';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [logIn.fulfilled]: (_, { payload }) => payload.user,
  [logOut.fulfilled]: () => initialUserState,
});

const token = createReducer(null, {
  [logIn.fulfilled]: (_, { payload }) => payload.access_token,
  [logOut.fulfilled]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [logIn.rejected]: setError,
  [logOut.rejected]: setError,
  [getCurrentProducts.rejected]: setError,
});
const isAuthenticated = createReducer(false, {
  [logIn.fulfilled]: () => true,
  [getCurrentProducts.fulfilled]: () => true,
  [logIn.rejected]: () => false,
  [getCurrentProducts.rejected]: () => false,
  [logOut.fulfilled]: () => false,
});
export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
