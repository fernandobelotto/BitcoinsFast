import { createSlice } from '@reduxjs/toolkit';
import { createAccount } from '../thunks/create-account.thunk';
import { login } from '../thunks/login.thunk';

interface SessionState {
  session_secret: string | null;
  session_key: string | null;
}

const initialState: SessionState = {
  session_key: null,
  session_secret: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSessionKey: (state, action) => {
      state.session_key = action.payload;
    },
    setSessionSecret: (state, action) => {
      state.session_secret = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.session_secret = action.payload.session_secret;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.session_key = action.payload.session_key;
      });
  },
});

export const { setSessionKey, setSessionSecret } = sessionSlice.actions;
export const SessionReducer = sessionSlice.reducer;
