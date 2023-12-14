import React from 'react';
import {FlatList} from 'react-native';
import {SnippetVideosType, UsingVideosType} from '../types/videos';
import VideoDetail from './VideoDetail';

interface VideoListProps {
  videos: UsingVideosType;
  onEndReached: () => void;
}

export default function VideoList({videos, onEndReached}: VideoListProps) {
  return (
    <FlatList
      data={videos}
      keyExtractor={(item: SnippetVideosType) =>
        `${item.title}-${item.channelTitle}`
      }
      onEndReached={onEndReached}
      renderItem={({item}: {item: SnippetVideosType}) => (
        <VideoDetail item={item} />
      )}
    />
  );
}
