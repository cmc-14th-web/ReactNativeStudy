import React from 'react';
import YoutubePlayer, {YoutubeIframeProps} from 'react-native-youtube-iframe';
import {Video} from '../types/video';

type VideoPlayerProps = {
  video: Video;
} & YoutubeIframeProps;

export default function VideoPlayer({video, ...props}: VideoPlayerProps) {
  return <YoutubePlayer {...props} videoId={video.id} />;
}
