import React from 'react';
import {Text} from 'react-native';
import {useGetTrendingVideos} from '../hooks/useGetTrendingVideos';

export default function HomeScreen() {
  // const {
  //   isGetTrendingVideosSuccess,
  //   isGetTrendingVideosError,
  //   isGetTrendingVideosLoading,
  //   trendingVideos,
  // } = useGetTrendingVideos();
  // trendingVideos.item.statistics.viewCount -> 조회수
  // trendingVideos.item.snippet.channelTitle -> 채널 제목
  // trendingVideos.item.snippet.title -> 제목
  // trendingVideos.item.snippet.thumbnails -> 썸네일 사진 정보
  // trendingVideos.item.snippet.publishedAt -> 업로드 날짜
  return <Text>HomeScreen</Text>;
}
