import {useQuery} from '@tanstack/react-query';
import QueryKeys from '../../../libraries/react-query/queryKeys';
import getPopularVideos from '../../../apis/getPopularVideos';

const maxResults = 25;

export default function useGetPopularVideosQuery() {
  const {
    data: videosResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QueryKeys.PopularVideos, maxResults],
    queryFn: getPopularVideos,
  });

  return {videosResponse, isLoading, isError};
}
