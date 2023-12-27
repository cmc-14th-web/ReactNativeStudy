import React from 'react';
import Container from '../components/Container';
import {Text} from 'react-native';
import useBookmarkState from '../libraries/recoil/hooks/useBookmarkState';

export default function BookmarksScreen() {
  const {bookmarks} = useBookmarkState();

  return (
    <Container>
      <Text>북마크</Text>
      {bookmarks.map((bookmark, index) => (
        <Text key={index}>
          {bookmark.lat}, {bookmark.lng}
        </Text>
      ))}
    </Container>
  );
}
