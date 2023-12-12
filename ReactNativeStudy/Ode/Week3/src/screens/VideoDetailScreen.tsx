import React from 'react';
import Container from '../components/common/Container';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigators/RootNavigator';
import VideoInfo from '../components/video/VideoInfo';
import VideoPlayer from '../components/video/VideoPlayer';

type VideoDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'VideoDetailScreen'
>;

export type VideoDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'VideoDetailScreen'
>;

type VideoDetailScreenProps = {
  route: VideoDetailScreenRouteProp;
};

export default function VideoDetailScreen({route}: VideoDetailScreenProps) {
  const {video} = route.params;

  return (
    <Container>
      <VideoPlayer video={video} height={300} />
      <VideoInfo video={video} />
    </Container>
  );
}
