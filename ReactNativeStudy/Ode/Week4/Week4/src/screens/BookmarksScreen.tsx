import React from 'react';
import Container from '../components/Container';
import {Text} from 'react-native';
import useFavoritesState from '../libraries/recoil/hooks/useFavoritesState';

export default function BookmarksScreen() {
  const {favorites} = useFavoritesState();
  return (
    <Container>
      <Text>북마크</Text>
      {favorites.map((favorite, index) => (
        <Text key={index}>
          {favorite.lat}, {favorite.lng}
        </Text>
      ))}
    </Container>
  );
}
