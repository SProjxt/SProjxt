import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/types';
import store from '../../store';

axios.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const token = store.getState().auth.token;
    config.headers = { ...config.headers };
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.baseURL = 'http://localhost:8083';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(function (response: AxiosResponse) {
  return response;
});
