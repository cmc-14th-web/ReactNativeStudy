import {useInfiniteQuery} from '@tanstack/react-query';
import {useStore} from '../store/store';
import getSearchResult from '../apis/getSearchResult';

export const useGetSearchResult = () => {
  const {searchContent} = useStore();
  const {fetchNextPage, error, isError} = useInfiniteQuery({
    queryKey: ['search'],
    queryFn: getSearchResult,
    initialPageParam: {
      nextPageToken: '',
      searchContent: searchContent,
    },
    getNextPageParam: (lastPage: any) => {
      return lastPage.nextPageToken
        ? {nextPageToken: lastPage.nextPageToken, searchContent: searchContent}
        : undefined;
    },
    enabled: false,
  });

  if (isError) {
    console.log(error);
  }

  return {
    fetchNextPage,
  };
};
