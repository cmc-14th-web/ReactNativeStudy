import axios from 'axios';

import Config from 'react-native-config';

export const instance = axios.create({
  baseURL: Config.YOUTUBE_API_URL,
});

export const videoParams = {
  part: 'snippet',
  chart: 'mostPopular',
  maxResults: 25,
  key: Config.YOUTUBE_API_KEY,
};

export const searchParams = {
  part: 'snippet',
  type: 'video',
  maxResults: 4,
  q: '',
  key: Config.YOUTUBE_API_KEY,
  nextPageToken: '',
};
