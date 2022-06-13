import Axios, { AxiosInstance } from 'axios';
import { store } from '../store';
import { API_URL } from '@env';
import { Alert } from 'react-native';
import i18n from '../i18n/index';

export function getAxiosInstance(): AxiosInstance {
  const state = store.getState();

  // Use for future requests implementations
  const { session_secret } = state.session;

  const axiosInstance = Axios.create({
    baseURL: API_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${session_secret}`,
      Accept: '*/*',
    },
  });

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      Alert.alert(
        'Error occured',
        i18n.t(error.response?.data.toLowerCase().slice(1, -2)),
      );
      return Promise.reject(error);
    },
  );

  return axiosInstance;
}
