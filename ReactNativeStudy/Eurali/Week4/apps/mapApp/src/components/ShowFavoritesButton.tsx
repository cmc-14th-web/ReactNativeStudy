import React, {RefObject} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SvgIcons from '../assets/icons/SvgIcons';
import COLORS from '../constants/colors';
import WebView from 'react-native-webview';
import favoriteStore, {StoreType} from '../store';

const ShowFavoritesButton = ({
  webViewRef,
}: {
  webViewRef: RefObject<WebView>;
}) => {
  const favorites = favoriteStore((state: StoreType) => state.favorites);

  const handleClickButton = () => {
    webViewRef.current?.postMessage(JSON.stringify(favorites));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClickButton}>
      <View style={styles.star}>
        <SvgIcons.SmallStarIcon />
      </View>
      <Text style={styles.text}>즐겨찾기</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLUE_600,
    borderWidth: 1,
    borderColor: COLORS.BLACK,
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    top: 20,
    left: 10,
  },
  star: {
    backgroundColor: COLORS.WHITE,
    width: 10,
    height: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 10,
  },
  text: {
    color: COLORS.WHITE,
  },
});

export default ShowFavoritesButton;
