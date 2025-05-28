import { AuthenticatedUser } from '@/_types/authenticated-user.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  loggedUser: AuthenticatedUser | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  loggedUser: typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('loggedUser') || '{}')
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedUser(state, action: PayloadAction<AuthenticatedUser>) {
      state.isLoggedIn = true;
      state.loggedUser = action.payload;
      localStorage.setItem('loggedUser', JSON.stringify(action.payload));
    },
    logout(state) {
      state.isLoggedIn = false;
      state.loggedUser = null;
    },
  },
});

export const { setLoggedUser, logout } = authSlice.actions;
export default authSlice.reducer;
