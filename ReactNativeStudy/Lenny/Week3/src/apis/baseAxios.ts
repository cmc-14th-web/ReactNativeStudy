import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});

export default baseAxios;
