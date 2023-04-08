import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// axios.interceptors.request.use(function (config: AxiosRequestConfig) {
//   config.baseURL = 'http://localhost:8083';
//   console.log('config', config);
//   return config;
// });

// axios.interceptors.request.use(function (error) {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(function (response: AxiosResponse) {
//   return response;
// });

axios.interceptors.request.use(
  function (config: AxiosRequestConfig) {
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
