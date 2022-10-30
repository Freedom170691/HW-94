import {createSlice} from "@reduxjs/toolkit";

const name = 'users';

export const initialState = {
  user: null,
  registerLoading: false,
  registerError: null,
  loginLoading: false,
  loginError: null,
};

const usersSlice = createSlice({
  name,
  initialState,
  reducers: {
    registerRequest(state) {
      state.registerLoading = true;
      state.registerError = null;
    },
    registerSuccess(state, {payload: user}) {
      state.registerLoading = false;
      state.user = user;
    },
    registerFailure(state, action) {
      state.registerLoading = false;
      state.registerError = action.payload;
    },
  }
});

export default usersSlice;















