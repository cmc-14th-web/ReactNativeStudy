import Config from 'react-native-config';
import {YoutubeVideoList} from '../type';
const getVideos = async () => {
  const response: YoutubeVideoList = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=10&key=${Config.YOUTUBE_V3_API_KEY}`,
    {
      method: 'GET',
    },
  )
    .then(res => res.json())
    .catch(err => console.log('ERROR: ' + err));

  return response;
};

const findVideos = async (searchKey: string, nextPageToken: string = '') => {
  const response: YoutubeVideoList = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchKey}&maxResults=3&key=${Config.YOUTUBE_V3_API_KEY}&pageToken=${nextPageToken}`,
    {
      method: 'GET',
    },
  )
    .then(res => res.json())
    .catch(err => console.log('ERROR: ' + err));

  return response;
};

export default {
  getVideos,
  findVideos,
};
