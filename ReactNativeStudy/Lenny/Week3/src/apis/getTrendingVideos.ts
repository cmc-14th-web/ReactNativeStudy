import {YOUTUBE_API_KEY} from '@env';
import baseAxios from './baseAxios';

const getTrendingVideos = async () => {
  const response = await baseAxios.get(
    `videos?part=snippet&part=statistics&chart=mostPopular&maxResults=25&key=${YOUTUBE_API_KEY}`,
  );
  return response.data;
};

export default getTrendingVideos;
