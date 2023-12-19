import {useQuery} from '@tanstack/react-query';
import getTrendingVideos from '../apis/getTrendingVideos';

export const useGetTrendingVideos = () => {
  const {
    isSuccess: isGetTrendingVideosSuccess,
    isLoading: isGetTrendingVideosLoading,
    isError: isGetTrendingVideosError,
    error,
    data,
  } = useQuery({
    queryKey: ['trending', 'trending-videos'],
    queryFn: getTrendingVideos,
  });

  if (isGetTrendingVideosError) {
    console.log(error);
  }

  return {
    isGetTrendingVideosSuccess,
    isGetTrendingVideosLoading,
    isGetTrendingVideosError,
    data,
  };
};
