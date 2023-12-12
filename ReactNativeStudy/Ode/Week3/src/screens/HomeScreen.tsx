import React from 'react';
import Container from '../components/Container';
import {FlatList, Text} from 'react-native';
import useGetPopularVideosQuery from '../features/video/hooks/useGetPopularVideosQuery';
import EmptyComponent from '../components/EmptyComponent';
import Colors from '../styles/colors';
import {Video} from '../features/video/types/video';
import VideoDetailButton from '../features/video/components/VideoDetailButton';

export default function HomeScreen() {
  const {videosResponse, isLoading, isError} = useGetPopularVideosQuery();

  return (
    <Container>
      {(() => {
        if (isLoading) {
          return <Text style={{color: Colors.White}}>불러오는 중...</Text>;
        }

        if (!videosResponse || isError) {
          return (
            <Text style={{color: Colors.White}}>문제가 발생했습니다.</Text>
          );
        }
        return (
          <FlatList
            data={videosResponse.items}
            keyExtractor={(item: Video, index: number) => `${item.id}-${index}`}
            renderItem={({item: video}: {item: Video}) => (
              <VideoDetailButton video={video} />
            )}
            ListEmptyComponent={EmptyComponent}
          />
        );
      })()}
    </Container>
  );
}
