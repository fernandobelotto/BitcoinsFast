import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserApi } from '../../api/user.api';
import { CreateRequestBody } from '../../types/create-request';

export const createAccount = createAsyncThunk(
  'user/create-account',
  async (body: CreateRequestBody) => {
    return UserApi.createAccount(body);
  },
);
