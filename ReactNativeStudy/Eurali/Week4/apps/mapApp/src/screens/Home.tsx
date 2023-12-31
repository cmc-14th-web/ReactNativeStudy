import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import CurrentLocationButton from '../components/CurrentLocationButton';
import FavoriteButton from '../components/FavoriteButton';
import favoriteStore, {StoreType} from '../store';
import {ACTIVATED, NORMAL, NOT_ACTIVATED} from '../constants/state';
import ShowFavoritesButton from '../components/ShowFavoritesButton';

const Home = () => {
  const webViewRef = useRef<WebView>(null);

  const favorites = favoriteStore((state: StoreType) => state.favorites);
  const curState = favoriteStore((state: StoreType) => state.curState);
  const setCurState = favoriteStore((state: StoreType) => state.setCurState);
  const setCurPos = favoriteStore((state: StoreType) => state.setCurPos);

  const onMessage = (e: WebViewMessageEvent) => {
    const data = JSON.parse(e.nativeEvent.data);
    if (favorites.filter(favorite => favorite.position !== data.position)) {
      setCurState(NOT_ACTIVATED);
    } else {
      setCurState(ACTIVATED);
    }
    setCurPos(data);
  };

  return (
    <View style={styles.mapView}>
      <WebView
        ref={webViewRef}
        source={{uri: 'http://192.168.35.246:3000'}}
        onMessage={onMessage}
      />
      <CurrentLocationButton webViewRef={webViewRef} />
      {curState !== NORMAL && (
        <FavoriteButton activated={curState === ACTIVATED ? true : false} />
      )}
      {curState === NORMAL && <ShowFavoritesButton webViewRef={webViewRef} />}
    </View>
  );
};

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});

export default Home;
