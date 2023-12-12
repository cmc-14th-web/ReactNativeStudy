import React from 'react';
import Container from '../components/common/Container';
import {FlatList, Text} from 'react-native';
import useGetPopularVideosQuery from '../hooks/useGetPopularVideosQuery';
import EmptyComponent from '../components/common/EmptyComponent';
import Colors from '../styles/colors';
import {Video} from '../types/video';
import VideoItem from '../components/video/VideoItem';

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
              <VideoItem video={video} />
            )}
            ListEmptyComponent={EmptyComponent}
          />
        );
      })()}
    </Container>
  );
}
