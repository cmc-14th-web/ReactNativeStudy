import {YOUTUBE_API_KEY} from '@env';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const getTrendingVideos = async () => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=25&key=${YOUTUBE_API_KEY}`,
  );
  return response.data;
};

export const useGetTrendingVideos = () => {
  const {
    isSuccess: isGetTrendingVideosSuccess,
    isLoading: isGetTrendingVideosLoading,
    data,
  } = useQuery({
    queryKey: ['trending'],
    queryFn: getTrendingVideos,
  });

  return {
    isGetTrendingVideosSuccess,
    isGetTrendingVideosLoading,
    data,
  };
};
