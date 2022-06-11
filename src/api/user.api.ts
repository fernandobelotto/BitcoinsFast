import { CreateRequestBody } from '../types/create-request';
import { CreateResponse } from '../types/create-response';
import { getAxiosInstance } from './axios-instance';

export class UserApi {
  static async createAccount(body: CreateRequestBody): Promise<CreateResponse> {
    const axiosInstance = getAxiosInstance();
    const { data } = await axiosInstance.post('/access/create', body);
    return data;
  }
}
