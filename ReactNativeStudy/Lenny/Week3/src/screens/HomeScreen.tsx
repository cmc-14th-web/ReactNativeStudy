import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetTrendingVideos} from '../hooks/useGetTrendingVideos';
import Container from '../components/Container';
import Header from '../components/home/HomeHeader';
import palette from '../styles/palette';
import {calculatePublishedTime} from '../utils/calculatePublishedTime';
import {snippetVideosType, videosType} from '../types/trendingVideos';
import TrendingVideosList from '../components/home/TrendingVideosList';

export default function HomeScreen() {
  const [trendingVideos, setTrendingVideos] = useState<
    ArrayLike<snippetVideosType> | null | undefined
  >([]);
  const {
    isGetTrendingVideosSuccess,
    isGetTrendingVideosLoading,
    isGetTrendingVideosError,
    data,
  } = useGetTrendingVideos();

  useEffect(() => {
    if (isGetTrendingVideosSuccess) {
      const {items} = data;
      const trendingVideosValues: snippetVideosType[] = items.map(
        (item: videosType) => {
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
          <FlatList
            data={trendingVideos}
            renderItem={({item}: {item: snippetVideosType}) => (
              <TrendingVideosList item={item} />
            )}
          />
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
