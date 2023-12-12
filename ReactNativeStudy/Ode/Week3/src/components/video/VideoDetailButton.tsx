import React from 'react';
import {Video} from '../../types/video';
import {TouchableOpacity} from 'react-native';
import VideoItem from './VideoItem';
import {useNavigation} from '@react-navigation/native';
import {VideoDetailScreenNavigationProp} from '../../screens/VideoDetailScreen';

type VideoDetailButtonProps = {
  video: Video;
};

export default function VideoDetailButton({video}: VideoDetailButtonProps) {
  const navigation = useNavigation<VideoDetailScreenNavigationProp>();
  const handleClick = () => navigation.navigate('VideoDetailScreen', {video});

  return (
    <TouchableOpacity onPress={handleClick}>
      <VideoItem video={video} />
    </TouchableOpacity>
  );
}
