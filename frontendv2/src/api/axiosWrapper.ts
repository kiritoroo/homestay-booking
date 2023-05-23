import { useRecoilState, useRecoilValue } from 'recoil';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { authSelector } from '@store/user/user.selectors';

export { useAxiosWrapper };

function useAxiosWrapper() {
  const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: '/api',
    timeout: 2000
  })

  const auth = useRecoilValue(authSelector); 

  return {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE'),
  };

  function request(method: string) {
    return (url: string, body?: any, params?: any) => {
      const config: AxiosRequestConfig = {
        method,
        headers: authHeader(),
      };
      if (body) {
        config.headers!['Content-Type'] = 'application/json';
        config.data = body;
      }
      if (params) {
        config.params = params;
      }
      return axiosInstance(url, config)
        .then(handleResponse)
        .catch(handleError);
    };
  }

  function authHeader() {
    if (auth.isAuth) {
      return { Authorization: `Bearer ${auth.token}` };
    } else {
      return {}
    }
  }

  function handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  function handleError(error: AxiosError) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      throw new Error(status?.toString());
    } else {
      throw error;
    }
  }
}
