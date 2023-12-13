import Config from 'react-native-config';
import {useInfiniteQuery} from 'react-query';

const getSearchResults = async ({query, nextPageToken}) => {
  const YOUTUBE_API_KEY = Config.YOUTUBE_API_KEY;
  const url =
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${YOUTUBE_API_KEY}` +
    (nextPageToken !== null ? `&pageToken=${nextPageToken}` : '');
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(url);
  return data;
};

export const useGetSearchResults = query => {
  const {data, isLoading, error, fetchNextPage, hasNextPage} = useInfiniteQuery(
    {
      queryKey: ['searchResults', {query}],
      queryFn: ({pageParam = null}) =>
        getSearchResults({query, nextPageToken: pageParam}),
      getNextPageParam: lastPage => lastPage.nextPageToken,
    },
  );

  return {
    searchResults: data?.pages?.map(page => page.items).flat(),
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  };
};
