import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import palette from '../../styles/palette';
import {useStore} from '../../store/store';
import DeleteSvg from '../../assets/delete.svg';
import {FavoriteListItemProps} from '../../types/favorite';

export default function FavoriteListItem({data}: FavoriteListItemProps) {
  const {favoriteMarkerLists} = useStore();
  return (
    <View
      style={
        data.index !== favoriteMarkerLists.length - 1
          ? withLineContainer
          : noLineContainer
      }>
      <Text numberOfLines={1} style={{marginRight: 4}}>
        {data.item.address}
      </Text>
      <TouchableOpacity>
        <DeleteSvg />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  commonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBlockColor: palette.Blue200,
    paddingVertical: 10,
    alignItems: 'center',
  },
});

const withLineContainer = {
  ...styles.commonStyle,
  borderBottomWidth: 1,
};

const noLineContainer = {
  ...styles.commonStyle,
  borderBottomWidth: 0,
};
