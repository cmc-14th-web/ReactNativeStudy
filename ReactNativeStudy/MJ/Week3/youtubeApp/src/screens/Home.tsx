import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Youtube from '../api/Youtube';
import VideoItem from '../components/VideoItem';
import palette from '../styles/palette';
import {YoutubeVideo} from '../type';
const Home = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['videos'],
    queryFn: Youtube.getVideos,
  });

  if (isLoading) {
    return (
      <View style={{...styles.screen, ...styles.center}}>
        <ActivityIndicator size="large" color={palette.Red} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{...styles.screen, ...styles.center, ...styles.error}}>
        <Text>로딩 중 에러가 발생했습니다. 다시 시도해주세요.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={data?.items}
        keyExtractor={(item: YoutubeVideo) => item.id}
        renderItem={({item}: {item: YoutubeVideo}) => (
          <VideoItem snippet={item.snippet} statistics={item.statistics} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.Black,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: palette.Red,
    fontSize: 32,
  },
});

export default Home;
