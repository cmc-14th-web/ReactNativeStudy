import Config from 'react-native-config';
import {useQuery} from 'react-query';

const getMostPopularVideoList = async () => {
  const YOUTUBE_API_KEY = Config.YOUTUBE_API_KEY;
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=25&key=${YOUTUBE_API_KEY}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const useGetMostPopularVideoList = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['mostPopularVideo'],
    queryFn: getMostPopularVideoList,
    select: data => data.items,
  });

  return {mostPopularVideoList: data, isLoading, error};
};
