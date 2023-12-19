import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
