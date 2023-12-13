import {View} from 'react-native';
import {useStore} from 'zustand';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import useGetSearchedVideosInfiniteQuery from 'libs/hooks/useGetSearchedVideosInfiniteQuery';
import {searchTextStore} from 'libs/store/searchText';
import VideoListItem from 'components/VideoListItem';
import Loading from 'components/atoms/Loading';
import Error from 'components/atoms/Error';

const SearchVideo = () => {
  const {searchedVideoList, fetchNextPage, isLoading, isError} =
    useGetSearchedVideosInfiniteQuery();
  const {searchText, setIsSearchFinished} = useStore(searchTextStore);

  const filteredVideoList = searchText ? searchedVideoList : [];

  useFocusEffect(
    useCallback(() => {
      setIsSearchFinished(false);
    }, [setIsSearchFinished]),
  );

  return (
    <View>
      {(() => {
        if (isLoading) {
          return <Loading />;
        }
        if (isError) {
          return <Error />;
        }

        return (
          <VideoListItem
            variant={'search'}
            videoList={filteredVideoList}
            fetchNextPage={fetchNextPage}
          />
        );
      })()}
    </View>
  );
};

export default SearchVideo;
