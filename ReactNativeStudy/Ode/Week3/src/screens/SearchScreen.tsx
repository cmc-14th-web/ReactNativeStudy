import React from 'react';
import Container from '../components/Container';
import {FlatList, Text} from 'react-native';
import useGetSearchResultVideosQuery from '../features/video/hooks/useGetSearchResultVideosQuery';
import {Video} from '../features/video/types/video';
import Colors from '../styles/colors';
import VideoDetailButton from '../features/video/components/VideoDetailButton';
import LoadingMoreText from '../components/text/LoadingMoreText';
import EmptyText from '../components/text/EmptyText';
import ErrorText from '../components/text/ErrorText';
import LoadingText from '../components/text/LoadingText';

export default function SearchScreen() {
  const {
    videosResponse,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    searchText,
  } = useGetSearchResultVideosQuery();

  return (
    <Container>
      {(() => {
        if (searchText.length === 0) {
          return (
            <Text style={{color: Colors.White}}>검색어를 입력해주세요</Text>
          );
        }
        if (isLoading) {
          return <LoadingText />;
        }

        if (isError) {
          return <ErrorText />;
        }

        const videos: Video[] =
          videosResponse?.pages.flatMap(page => page.items) || [];

        return (
          <FlatList
            data={videos}
            keyExtractor={(item: Video, index: number) => `${item.id}-${index}`}
            renderItem={({item: video}: {item: Video}) => (
              <VideoDetailButton video={video} />
            )}
            onEndReached={() => fetchNextPage()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={isFetchingNextPage ? LoadingMoreText : null}
            ListEmptyComponent={EmptyText}
          />
        );
      })()}
    </Container>
  );
}
