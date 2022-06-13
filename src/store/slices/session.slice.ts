import { createSlice } from '@reduxjs/toolkit';
import { createAccount } from '../thunks/create-account.thunk';
import { login } from '../thunks/login.thunk';
import { monitorSession } from '../thunks/monitor-session.thunk';

interface SessionState {
  session_secret: string | null;
  session_key: string | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: SessionState = {
  session_key: null,
  session_secret: null,
  loading: 'idle',
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

      .addCase(monitorSession.fulfilled, (state, action) => {
        state.loading = 'succeeded';
      })
      .addCase(monitorSession.pending, state => {
        state.loading = 'pending';
      })
      .addCase(monitorSession.rejected, state => {
        state.loading = 'failed';
      })

      .addCase(login.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.session_secret = action.payload.session_secret;
      })
      .addCase(login.pending, state => {
        state.loading = 'pending';
      })
      .addCase(login.rejected, state => {
        state.loading = 'failed';
      })

      .addCase(createAccount.fulfilled, (state, action) => {
        state.session_key = action.payload.session_key;
      });
  },
});

export const { setSessionKey, setSessionSecret } = sessionSlice.actions;
export const SessionReducer = sessionSlice.reducer;
