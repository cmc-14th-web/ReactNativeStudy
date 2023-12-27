import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useStore} from '../../store/store';
import FavoriteListItem from './FavoriteListItem';

interface FavoriteMarkerProps {
  address: string;
  latitude: number;
  longitude: number;
}

export default function FavoriteList() {
  const {favoriteMarkers} = useStore();
  return (
    <View style={styles.container}>
      {!favoriteMarkers.length && <Text>아직 즐겨찾기가 없습니다.</Text>}
      {favoriteMarkers && (
        <FlatList
          data={favoriteMarkers}
          keyExtractor={(item: FavoriteMarkerProps) => item.address}
          renderItem={props => {
            return <FavoriteListItem data={props} />;
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 45,
  },
});
