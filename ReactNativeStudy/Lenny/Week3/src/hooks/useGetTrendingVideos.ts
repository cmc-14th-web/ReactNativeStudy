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
    isError: isGetTrendingVideosError,
    isLoading: isGetTrendingVideosLoading,
    data: trendingVideos,
  } = useQuery({
    queryKey: ['trending'],
    queryFn: getTrendingVideos,
  });
  return {
    isGetTrendingVideosSuccess,
    isGetTrendingVideosError,
    isGetTrendingVideosLoading,
    trendingVideos,
  };
};
