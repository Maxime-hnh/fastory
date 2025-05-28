import { AuthenticatedUser } from '@/_types/authenticated-user.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  dialogOpen: boolean;
  isLoggedIn: boolean;
  loggedUser: AuthenticatedUser | null;
}

const initialState: AuthState = {
  dialogOpen: true,
  isLoggedIn: false,
  loggedUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedUser(state, action: PayloadAction<AuthenticatedUser>) {
      state.isLoggedIn = true;
      state.dialogOpen = false;
      state.loggedUser = action.payload;
      localStorage.setItem('loggedUser', JSON.stringify(action.payload));
    },
    setDialogOpen(state, action: PayloadAction<boolean>) {
      state.dialogOpen = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.dialogOpen = true;
      state.loggedUser = null;
    },
  },
});

export const { setLoggedUser, setDialogOpen, logout } = authSlice.actions;
export default authSlice.reducer;
