import { createAsyncThunk } from '@reduxjs/toolkit';
import { SessionApi } from '../../api/session.api';

export const monitorSession = createAsyncThunk(
  'session/monitor-session',
  async (session_key: string) => {
    return SessionApi.monitorSession(session_key);
  },
);
