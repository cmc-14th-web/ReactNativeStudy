import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  headers: {
    'Content-Type': 'application/json',
  },
});