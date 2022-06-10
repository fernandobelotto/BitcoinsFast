import { createAsyncThunk } from '@reduxjs/toolkit';
import { SessionApi } from '../../api/session.api';
import { LoginRequestBody } from '../../types/login-request';

export const login = createAsyncThunk(
  'session/login',
  async (body: LoginRequestBody) => {
    return SessionApi.login(body);
  },
);
