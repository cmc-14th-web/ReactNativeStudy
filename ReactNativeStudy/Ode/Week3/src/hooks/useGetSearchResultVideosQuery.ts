import QueryKeys from '../libraries/react-query/queryKeys';
import getSearchResultVideos from '../apis/getSearchResultVideos';
import useSearchTextStorage from './useSearchText';
import {useInfiniteQuery} from '@tanstack/react-query';

const maxResults = 5;

export default function useGetSearchResultVideosQuery() {
  const {searchText} = useSearchTextStorage();
  const {
    data: videoResponse,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QueryKeys.SearchResultVideos, searchText, maxResults],
    queryFn: ({pageParam}) =>
      getSearchResultVideos({
        pageToken: pageParam,
        searchText,
        maxResults,
      }),
    getNextPageParam: lastPage => lastPage?.nextPageToken || undefined,
    initialPageParam: '',
    enabled: searchText.length > 0,
  });

  return {videoResponse, isLoading, isError, fetchNextPage, isFetchingNextPage};
}
