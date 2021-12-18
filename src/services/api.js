import axios from 'axios';

const BACKEND_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,

    (error) => {
      return Promise.reject(error);
    },
  );

  return api;
};
