import React from 'react';
import Container from '../components/common/Container';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigators/RootNavigator';
import VideoSummary from '../components/video/VideoSummary';

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
      <VideoSummary video={video} />
    </Container>
  );
}
