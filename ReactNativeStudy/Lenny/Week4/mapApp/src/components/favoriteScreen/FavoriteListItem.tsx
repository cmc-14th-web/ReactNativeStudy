import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import palette from '../../styles/palette';
import {useStore} from '../../store/store';
import DeleteSvg from '../../assets/delete.svg';

interface FavoriteListItemProps {
  data: {
    index: number;
    item: {
      address: string;
      latitude: number;
      longitude: number;
    };
  };
}

export default function FavoriteListItem({data}: FavoriteListItemProps) {
  const {favoriteMarkers} = useStore();
  return (
    <View
      style={
        data.index !== favoriteMarkers.length - 1
          ? withLineContainer
          : noLineContainer
      }>
      <Text numberOfLines={1} style={{marginRight: 4}}>
        {data.item.address}
      </Text>
      <Pressable>
        <DeleteSvg />
      </Pressable>
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
