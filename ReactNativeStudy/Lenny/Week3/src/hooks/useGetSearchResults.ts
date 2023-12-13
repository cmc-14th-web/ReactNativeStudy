import {useInfiniteQuery} from '@tanstack/react-query';
import {useStore} from '../store/store';
import getSearchResult from '../apis/getSearchResult';

interface LastPageProps {
  nextPageToken: string;
  searchContent: string;
}

export const useGetSearchResults = () => {
  const {searchContent} = useStore();
  const {fetchNextPage, error, isError} = useInfiniteQuery({
    queryKey: ['search'],
    queryFn: getSearchResult,
    initialPageParam: {
      nextPageToken: '',
      searchContent: searchContent,
    },
    getNextPageParam: (lastPage: LastPageProps) => {
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
