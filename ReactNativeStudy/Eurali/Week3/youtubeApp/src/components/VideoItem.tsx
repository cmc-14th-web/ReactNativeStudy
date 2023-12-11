import React from 'react';
import {Text, View} from 'react-native';
import {YoutubeVideo} from '../types/YoutubeVideo';

const VideoItem = ({item}: {item: YoutubeVideo}) => {
  return (
    <View>
      <img src={item.snippet.thumbnails.medium.url} alt="youtube thumbnail" />
      <View>
        <Text>{item.snippet.title}</Text>
        <View>
          <Text>{item.snippet.channelTitle}</Text>
          <Text>조회수: {item.snippet.publishedAt}</Text>
        </View>
      </View>
    </View>
  );
};

export default VideoItem;
