import React from 'react';
import Container from '../components/Container';
import VideoInfo from '../features/video/components/VideoInfo';
import VideoPlayer from '../features/video/components/VideoPlayer';
import {ScreenRouteProp} from '../navigators/types';
import ErrorText from '../components/text/ErrorText';

type VideoDetailScreenProps = {
  route: ScreenRouteProp<'VideoDetailScreen'>;
};

export default function VideoDetailScreen({
  route: {params},
}: VideoDetailScreenProps) {
  if (!params) {
    return <ErrorText />;
  }

  const {video} = params;

  return (
    <Container>
      <VideoPlayer video={video} height={300} />
      <VideoInfo video={video} />
    </Container>
  );
}
