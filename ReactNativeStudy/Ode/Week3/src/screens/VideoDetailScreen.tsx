import React from 'react';
import Container from '../components/Container';
import VideoInfo from '../features/video/components/VideoInfo';
import VideoPlayer from '../features/video/components/VideoPlayer';
import {ScreenRouteProp} from '../navigators/types';

type VideoDetailScreenProps = {
  route: ScreenRouteProp<'VideoDetailScreen'>;
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
