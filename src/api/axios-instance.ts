import Axios, { AxiosInstance } from 'axios';
import { store } from '../store';
import { API_URL } from '@env';

export function getAxiosInstance(): AxiosInstance {
  const state = store.getState();

  const { accessToken } = state.session;

  const axiosInstance = Axios.create({
    baseURL: API_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      Accept: '*/*',
    },
  });

  return axiosInstance;
}
