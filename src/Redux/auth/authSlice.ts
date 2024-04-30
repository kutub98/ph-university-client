import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../Store';

export type TUser = {
  user: string;
  role: string;
  userId: string;
  iat: number;
  exp: number;
};

type TInitialState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      (state.token = token), (state.user = user);
    },
    logOut: state => {
      (state.user = null), (state.token = null);
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
export const useToken = (state: RootState) => state.auth.token;
export const SelectorUser = (state: RootState) => state.auth.user;
