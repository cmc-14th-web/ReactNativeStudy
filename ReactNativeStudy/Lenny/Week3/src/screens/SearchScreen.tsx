import React from 'react';
import {FlatList, Text} from 'react-native';
import Container from '../components/Container';
import SearchHeader from '../components/search/SearchHeader';
import TrendingVideosList from '../components/home/TrendingVideosList';
import {snippetVideosType} from '../types/trendingVideos';
import {useStore} from '../store/store';

export default function SearchScreen() {
  const {searchResults} = useStore();
  return (
    <Container>
      <SearchHeader />
      <Text>SearchScreen</Text>
      <FlatList
        data={searchResults}
        renderItem={({item}: {item: snippetVideosType}) => (
          <TrendingVideosList item={item} />
        )}
      />
    </Container>
  );
}
