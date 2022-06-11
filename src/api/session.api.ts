import { CreateRequestBody } from '../types/create-request';
import { getAxiosInstance } from './axios-instance';

export class UserApi {
  static async createAccount(body: CreateRequestBody) {
    const axiosInstance = getAxiosInstance();
    const { data } = await axiosInstance.post('/access/create', body);
    return data;
  }
}
