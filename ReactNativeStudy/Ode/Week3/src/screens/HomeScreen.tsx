import React from 'react';
import Container from '../components/Container';
import {FlatList} from 'react-native';
import useGetPopularVideosQuery from '../features/video/hooks/useGetPopularVideosQuery';
import {Video} from '../features/video/types/video';
import VideoDetailButton from '../features/video/components/VideoDetailButton';
import EmptyText from '../components/text/EmptyText';
import ErrorText from '../components/text/ErrorText';
import LoadingText from '../components/text/LoadingText';

export default function HomeScreen() {
  const {videosResponse, isLoading, isError} = useGetPopularVideosQuery();

  return (
    <Container>
      {(() => {
        if (isLoading) {
          return <LoadingText />;
        }

        if (!videosResponse || isError) {
          return <ErrorText />;
        }
        return (
          <FlatList
            data={videosResponse.items}
            keyExtractor={(item: Video, index: number) => `${item.id}-${index}`}
            renderItem={({item: video}: {item: Video}) => (
              <VideoDetailButton video={video} />
            )}
            ListEmptyComponent={EmptyText}
          />
        );
      })()}
    </Container>
  );
}
