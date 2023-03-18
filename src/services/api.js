/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import useAuth from './useAuth';

const api = axios.create({
  baseURL: 'https://theraponto.dev.thera.com.br:4433',
});

api.interceptors.request.use(async (config) => {
  const { getToken } = useAuth();
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
