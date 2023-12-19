import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import YoutubeIframe from 'react-native-youtube-iframe';
import {RootStackParamList} from '../types/navigators';
import Container from '../layout/Container';
import VideoInfo from '../components/VideoInfo';

type VideoPlayProps = NativeStackScreenProps<RootStackParamList, 'VideoPlay'>;

const VideoPlay = ({route}: VideoPlayProps) => {
  return (
    <Container>
      <YoutubeIframe height={230} videoId={route.params.videoId} />
      <VideoInfo videoInfo={route.params.videoInfo} />
    </Container>
  );
};

export default VideoPlay;
