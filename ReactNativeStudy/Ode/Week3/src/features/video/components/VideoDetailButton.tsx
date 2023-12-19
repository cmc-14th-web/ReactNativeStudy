import React from 'react';
import {Video} from '../types/video';
import {TouchableOpacity} from 'react-native';
import VideoSummary from './VideoSummary';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../../navigators/types';

type VideoDetailButtonProps = {
  video: Video;
};

export default function VideoDetailButton({video}: VideoDetailButtonProps) {
  const navigation = useNavigation<ScreenNavigationProp<'VideoDetailScreen'>>();
  const handleClick = () => navigation.navigate('VideoDetailScreen', {video});

  return (
    <TouchableOpacity onPress={handleClick}>
      <VideoSummary video={video} />
    </TouchableOpacity>
  );
}
