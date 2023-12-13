import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useGetTrendingVideos} from '../hooks/useGetTrendingVideos';
import Container from '../components/Container';
import Header from '../components/home/HomeHeader';
import palette from '../styles/palette';
import {SnippetVideosType, UsingVideosType} from '../types/videos';
import extractVideoData from '../utils/extractVideoData';
import VideoList from '../components/VideoList';

export default function HomeScreen() {
  const [trendingVideos, setTrendingVideos] = useState<UsingVideosType>([]);
  const {
    isGetTrendingVideosSuccess,
    isGetTrendingVideosLoading,
    isGetTrendingVideosError,
    data,
  } = useGetTrendingVideos();

  useEffect(() => {
    if (isGetTrendingVideosSuccess) {
      const {items} = data;
      const trendingVideosValues: SnippetVideosType[] = extractVideoData(items);
      setTrendingVideos(trendingVideosValues);
    }
  }, [data, isGetTrendingVideosSuccess, setTrendingVideos]);

  return (
    <Container>
      <Header />
      <View style={styles.beforeSuccessWrapStyle}>
        {isGetTrendingVideosLoading && <ActivityIndicator />}
        {isGetTrendingVideosError && (
          <Text style={styles.errorTextStyle}>불러오지 못 했습니다.</Text>
        )}
      </View>
      {isGetTrendingVideosSuccess && (
        <>
          <Text style={styles.trendingVideos}>인기 동영상</Text>
          <VideoList videos={trendingVideos} onEndReached={() => null} />
        </>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  trendingVideos: {
    color: palette.Red,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: '600',
  },
  beforeSuccessWrapStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTextStyle: {
    color: palette.White,
  },
});
