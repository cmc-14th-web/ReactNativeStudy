import {useQuery} from '@tanstack/react-query';

import {VideoApi} from 'apis/VideoApi';
import {queryKey} from 'constants/api';

const maxResults = 25;

export const useGetPopularVideosQuery = () => {
  const {
    data: videoList = [],
    isLoading,
    isError,
  } = useQuery([queryKey.VIDEOLIST, maxResults], () =>
    VideoApi.GET_POPULAR_VIDEOS(maxResults),
  );

  return {videoList, isLoading, isError};
};
