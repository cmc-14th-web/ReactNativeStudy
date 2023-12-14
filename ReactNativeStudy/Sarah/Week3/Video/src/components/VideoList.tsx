import React from 'react';
import {FlatList} from 'react-native';
import VideoItem from './VideoItem';
import {YoutubeVideo} from '../types/video';

interface VideosListProps {
  videoData: YoutubeVideo[];
  searchData: YoutubeVideo[];
}

const VideoList = ({videoData, searchData}: VideosListProps) => {
  const data = searchData || videoData;

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}: {item: YoutubeVideo}) => (
        <VideoItem
          key={item.id}
          url={item.snippet.thumbnails.medium.url}
          channelTitle={item.snippet.channelTitle}
          publishedAt={item.snippet?.publishedAt}
          title={item.snippet.title}
        />
      )}
    />
  );
};

export default VideoList;
