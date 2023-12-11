import React from 'react';
import Container from '../components/common/Container';
import {FlatList, Text} from 'react-native';
import useGetSearchResultVideosQuery from '../hooks/useGetSearchResultVideosQuery';
import {Video} from '../types/video';
import LoadingMoreIndicator from '../components/common/LoadingMoreIndicator';
import EmptyComponent from '../components/common/EmptyComponent';
import Colors from '../styles/colors';
import VideoItem from '../components/common/VideoItem';

export default function SearchScreen() {
  const {
    videosResponse,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetSearchResultVideosQuery();

  return (
    <Container>
      {(() => {
        if (isLoading) {
          return <Text style={{color: Colors.White}}>불러오는 중...</Text>;
        }

        if (isError) {
          return (
            <Text style={{color: Colors.White}}>문제가 발생했습니다.</Text>
          );
        }

        const videos: Video[] =
          videosResponse?.pages.flatMap(page => page.items) || [];

        return (
          <FlatList
            data={videos}
            keyExtractor={(item: Video, index: number) => `${item.id}-${index}`}
            renderItem={({item: video}: {item: Video}) => (
              <VideoItem video={video} />
            )}
            onEndReached={() => fetchNextPage()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              isFetchingNextPage ? LoadingMoreIndicator : null
            }
            ListEmptyComponent={EmptyComponent}
          />
        );
      })()}
    </Container>
  );
}
