import React from 'react';
import Container from '../components/Container';
import {Text} from 'react-native';
import useBookmarkState from '../libraries/recoil/hooks/useBookmarkState';

export default function BookmarksScreen() {
  const {bookmarks} = useBookmarkState();

  return (
    <Container>
      <Text>북마크</Text>
      {Object.values(bookmarks).map(bookmark => (
        <Text key={bookmark.id}>{bookmark.address}</Text>
      ))}
    </Container>
  );
}
