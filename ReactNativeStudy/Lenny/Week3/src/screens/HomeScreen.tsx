import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text} from 'react-native';
import {useGetTrendingVideos} from '../hooks/useGetTrendingVideos';
import Container from '../components/Container';
import Header from '../components/home/Header';
import palette from '../styles/palette';
import {calculatePublishedTime} from '../utils/calculatePublishedTime';
import {
  snippetTrendingVideosType,
  trendingVideosType,
} from '../types/trendingVideos';
import TrendingVideosList from '../components/home/TrendingVideosList';

export default function HomeScreen() {
  const [trendingVideos, setTrendingVideos] = useState<
    ArrayLike<snippetTrendingVideosType> | null | undefined
  >([]);
  const {isGetTrendingVideosSuccess, isGetTrendingVideosLoading, data} =
    useGetTrendingVideos();

  useEffect(() => {
    if (isGetTrendingVideosSuccess) {
      const {items} = data;
      const trendingVideosValues: snippetTrendingVideosType[] = items.map(
        (item: trendingVideosType) => {
          return {
            viewCount: item.statistics.viewCount, // 조회수
            channelTitle: item.snippet.channelTitle, // 채널 이름
            title: item.snippet.title, // 제목
            thumbnails: item.snippet.thumbnails, // 썸네일 사진 정보
            publishedAt: calculatePublishedTime(item.snippet.publishedAt), // 업로드 날짜
          };
        },
      );
      setTrendingVideos(trendingVideosValues);
    }
  }, [data, isGetTrendingVideosSuccess, setTrendingVideos]);

  if (isGetTrendingVideosLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <Header />
      <Text style={styles.trendingVideos}>인기 동영상</Text>
      <FlatList
        data={trendingVideos}
        renderItem={({item}: {item: snippetTrendingVideosType}) => (
          <TrendingVideosList item={item} />
        )}
      />
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
});
