import React, {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import Container from '../components/Container';
import PlayVideoHeader from '../components/playVideo/PlayVideoHeader';
import YoutubeIframe from 'react-native-youtube-iframe';
import {useStore} from '../store/store';
import VideoDetailText from '../components/VideoDetailText';

export default function PlayVideoScreen() {
  const {videoDetail} = useStore();
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  return (
    <Container>
      <PlayVideoHeader />
      <YoutubeIframe
        height={220}
        play={playing}
        videoId={videoDetail.videoId}
        onChangeState={onStateChange}
      />
      <VideoDetailText item={videoDetail} />
    </Container>
  );
}
