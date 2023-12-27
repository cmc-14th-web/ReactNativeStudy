import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useStore} from '../../store/store';
import FavoriteListItem from './FavoriteListItem';
import {FavoriteMarkerProps} from '../../types/favorite';

export default function FavoriteList() {
  const {favoriteMarkerLists} = useStore();
  return (
    <View style={styles.container}>
      {!favoriteMarkerLists.length && (
        <Text style={styles.textStyle}>아직 즐겨찾기가 없습니다.</Text>
      )}
      {favoriteMarkerLists && (
        <FlatList
          data={favoriteMarkerLists}
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
  textStyle: {textAlign: 'center'},
});
