import { LoginRequestBody } from '../types/login-request';
import { LoginResponse } from '../types/login-response';
import { MonitorSessionResponse } from '../types/monitor-session-response';
import { getAxiosInstance } from './axios-instance';

export class SessionApi {
  static async login(body: LoginRequestBody): Promise<LoginResponse> {
    const axiosInstance = getAxiosInstance();
    const { data } = await axiosInstance.post('/login', body);
    return data;
  }
  static async monitorSession(
    session_key: string,
  ): Promise<MonitorSessionResponse> {
    const axiosInstance = getAxiosInstance();
    const { data } = await axiosInstance.get(`/access/magic/${session_key}`);
    return data;
  }
}
