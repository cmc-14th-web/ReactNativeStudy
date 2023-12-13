import {useInfiniteQuery} from '@tanstack/react-query';
import {useStore} from 'zustand';

import {VideoApi} from 'apis/VideoApi';
import {queryKey} from 'constants/api';
import {searchTextStore} from 'libs/store/searchText';
import {VideoType} from 'types/video';

const maxResults = 5;

const useGetSearchedVideosInfiniteQuery = () => {
  const {searchText, isSearchFinished} = useStore(searchTextStore);

  const {data, fetchNextPage, isLoading, isError} = useInfiniteQuery(
    [queryKey.SEARCHEDVIDEOLIST, isSearchFinished, maxResults],
    ({pageParam = ''}) =>
      VideoApi.GET_SEARCHED_VIDEOS(searchText, pageParam, maxResults),
    {
      getNextPageParam: lastPageData => lastPageData.nextPageToken,
      enabled: isSearchFinished,
    },
  );

  const searchedVideoList: VideoType[] =
    data?.pages.flatMap(page => page.items) || [];

  return {
    searchedVideoList,
    fetchNextPage,
    isLoading,
    isError,
  };
};

export default useGetSearchedVideosInfiniteQuery;
