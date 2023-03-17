/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import AuthService from './auth';

const api = axios.create({
  baseURL: 'https://theraponto.dev.thera.com.br:4433',
});

api.interceptors.request.use(async (config) => {
  const token = AuthService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
