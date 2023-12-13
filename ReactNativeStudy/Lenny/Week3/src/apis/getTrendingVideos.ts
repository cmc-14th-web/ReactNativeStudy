import {YOUTUBE_API_KEY2} from '@env';
import baseAxios from './baseAxios';

const getTrendingVideos = async () => {
  const response = await baseAxios.get(
    `videos?part=snippet&part=statistics&chart=mostPopular&maxResults=25&key=${YOUTUBE_API_KEY2}`,
  );
  return response.data;
};

export default getTrendingVideos;
