import {useInfiniteQuery} from 'react-query';
import searchVideos from '../apis/searchVideo';

export const useSearchVideo = (keyword: string) => {
  const {
    data: searchData = [],
    fetchNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery(
    ['searchVideo', keyword],
    ({pageParam = ''}) => searchVideos(keyword, pageParam),
    {
      enabled: keyword !== '',
      getNextPageParam: lastPage => lastPage?.nextPageToken,
    },
  );
  return {
    searchData: searchData,
    fetchNextPage,
    isLoading,
    isError,
  };
};
