import {API_YOUTUBE_TRENDING} from '@env';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const getTrendingVideos = async () => {
  const response = await axios.get(API_YOUTUBE_TRENDING);
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
