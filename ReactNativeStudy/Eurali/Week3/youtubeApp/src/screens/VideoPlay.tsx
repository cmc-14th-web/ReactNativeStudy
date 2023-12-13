import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import {RootStackParamList} from '../types/navigators';
import Container from '../layout/Container';

type VideoPlayProps = NativeStackScreenProps<RootStackParamList, 'VideoPlay'>;

const VideoPlay = ({route}: VideoPlayProps) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  return (
    <Container>
      <YoutubeIframe
        height={300}
        play={playing}
        videoId={route.params.videoId}
        onChangeState={onStateChange}
      />
    </Container>
  );
};

export default VideoPlay;
