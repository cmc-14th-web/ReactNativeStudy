import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SvgIcons from '../assets/icons/SvgIcons';
import COLORS from '../constants/colors';
import favoriteStore, {FavoriteType, StoreType} from '../store';

const AddressContainer = ({favoriteItem}: {favoriteItem: FavoriteType}) => {
  const removeFavorites = favoriteStore(
    (state: StoreType) => state.removeFavorites,
  );

  const handleClickTrashButton = () => {
    removeFavorites(favoriteItem);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{favoriteItem.address}</Text>
      <TouchableOpacity onPress={handleClickTrashButton} style={styles.button}>
        <SvgIcons.TrashIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  button: {
    backgroundColor: COLORS.GRAY_200,
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 13,
  },
  text: {
    color: COLORS.BLACK,
  },
});

export default AddressContainer;
