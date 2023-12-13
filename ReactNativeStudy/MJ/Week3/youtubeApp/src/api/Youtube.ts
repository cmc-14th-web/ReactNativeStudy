import Config from 'react-native-config';
import {YoutubeVideoList} from '../type';
const getVideos = async () => {
  const response: YoutubeVideoList = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=1&key=${Config.YOUTUBE_V3_API_KEY}`,
    {
      method: 'GET',
    },
  ).then(res => res.json());

  return response;
};

const findVideos = async (searchKey: string, nextPageToken: string) => {
  const response: YoutubeVideoList = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet, statistics&type=video&q=${searchKey}&maxResults=5&key=${Config.YOUTUBE_V3_API_KEY}&pageToken=${nextPageToken}`,
    {
      method: 'GET',
    },
  ).then(res => res.json());

  return response;
};

export default {
  getVideos,
  findVideos,
};
