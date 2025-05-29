import { AuthenticatedUser } from '@/_types/authenticated-user.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  loggedUser: AuthenticatedUser | null;
}

const initialState: AuthState = {
  loggedUser: typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('loggedUser') || '{}')
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedUser(state, action: PayloadAction<AuthenticatedUser>) {
      state.loggedUser = action.payload;
      localStorage.setItem('loggedUser', JSON.stringify(action.payload));
    },
    logout(state) {
      state.loggedUser = null;
      localStorage.removeItem('loggedUser');
    },
  },
});

export const { setLoggedUser, logout } = authSlice.actions;
export default authSlice.reducer;
