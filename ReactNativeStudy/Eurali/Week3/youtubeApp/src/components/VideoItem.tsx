import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {YoutubeVideo} from '../types/YoutubeVideo';
import screenInfo from '../constants/screenInfo';
import {SearchedYoutubeVideo} from '../types/SearchedYoutubeVideo';
import VideoInfo from './VideoInfo';

const VideoItem = ({
  item,
  onClick,
}: {
  item: YoutubeVideo | SearchedYoutubeVideo;
  onClick: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Image
        source={{uri: item.snippet.thumbnails.medium.url}}
        alt="youtube thumbnail"
        width={screenInfo.width}
        height={screenInfo.height / 3.5}
      />
      <VideoInfo
        videoInfo={{
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt,
        }}
      />
    </TouchableOpacity>
  );
};

export default VideoItem;
