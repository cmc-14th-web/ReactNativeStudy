import React from 'react';
import {Text} from 'react-native';
import Container from '../components/Container';
import SearchHeader from '../components/search/SearchHeader';
import {useStore} from '../store/store';
import {useGetMoreResults} from '../hooks/useGetMoreResults';
import VideoList from '../components/VideoList';

export default function SearchScreen() {
  const {searchResults} = useStore();

  const {getMoreResults} = useGetMoreResults();

  return (
    <Container>
      <SearchHeader />
      <Text>SearchScreen</Text>
      <VideoList videos={searchResults} onEndReached={getMoreResults} />
    </Container>
  );
}
