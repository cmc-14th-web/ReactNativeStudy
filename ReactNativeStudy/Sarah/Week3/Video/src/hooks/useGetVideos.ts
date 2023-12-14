import {useQuery} from 'react-query';
import getVideos from '../apis/getVideos';

export const useGetVideos = () => {
  const {
    data: videoData = [],
    isLoading,
    isError,
  } = useQuery(['getVideos'], getVideos);

  return {videoData, isLoading, isError};
};
