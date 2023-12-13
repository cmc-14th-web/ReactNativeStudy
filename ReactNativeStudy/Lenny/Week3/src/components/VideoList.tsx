import React from 'react';
import {FlatList} from 'react-native';
import {SnippetVideosType, UsingVideosType} from '../types/videos';
import TrendingVideosList from './home/TrendingVideosList';

interface VideoListProps {
  videos: UsingVideosType;
  onEndReached: () => void;
}

export default function VideoList({videos, onEndReached}: VideoListProps) {
  return (
    <FlatList
      data={videos}
      keyExtractor={(item: SnippetVideosType) => item.publishedAt}
      onEndReached={onEndReached}
      renderItem={({item}: {item: SnippetVideosType}) => (
        <TrendingVideosList item={item} />
      )}
    />
  );
}
