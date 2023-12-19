import axios from 'axios';
import {key} from './key';

export const youtubeApiClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key,
    part: 'snippet',
  },
});
