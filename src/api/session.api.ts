import { LoginRequestBody } from '../types/login-request';
import { getAxiosInstance } from './axios-instance';

export class SessionApi {
  static async login(body: LoginRequestBody) {
    const axiosInstance = getAxiosInstance();
    const { data } = await axiosInstance.post('/login', body);
    return data;
  }
}
