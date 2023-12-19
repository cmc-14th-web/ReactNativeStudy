import React from 'react';
import {ActivityIndicator} from 'react-native';
import Container from '../components/Container';
import SearchHeader from '../components/search/SearchHeader';
import {useStore} from '../store/store';
import {useGetMoreResults} from '../hooks/useGetMoreResults';
import VideoList from '../components/VideoList';
import {useGetSearchResults} from '../hooks/useGetSearchResults';

export default function SearchScreen() {
  const {searchResults} = useStore();

  const {isFetchingNextPage} = useGetSearchResults();
  const {getMoreResults} = useGetMoreResults();

  return (
    <Container>
      <SearchHeader />
      <VideoList videos={searchResults} onEndReached={getMoreResults} />
      {searchResults && isFetchingNextPage && <ActivityIndicator />}
    </Container>
  );
}
