import axios from 'axios';
import { baseUrl } from './env.config.js';
const axiosInstance = axios.create({
  baseURL: baseUrl,
  // withCredentials: true,
});

export default axiosInstance;
