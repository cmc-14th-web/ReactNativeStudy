import {Alert, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import Geolocation from '@react-native-community/geolocation';
import {useCallback, useEffect} from 'react';

import {windowWidth, windowHeight} from '../constants/screenSize';
import FavoriteButton from './FavoriteButton';
import {useStore} from 'zustand';
import {webViewRefStore} from '../libs/store/webviewRef';
import {mapStore} from '../libs/store/map';

const Map = () => {
  const {webViewRef} = useStore(webViewRefStore);
  const {setFavoriteLocationList} = useStore(mapStore);

  const sendCurrentPosition = useCallback(() => {
    Geolocation.watchPosition(
      position => {
        const {coords} = position;
        const message = {
          type: 'location',
          payload: {
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
        };

        webViewRef.current?.postMessage(JSON.stringify(message));
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  }, []);

  useEffect(() => {
    sendCurrentPosition();
  }, []);

  return (
    <>
      <WebView
        ref={webViewRef}
        source={{
          uri: 'https://cmc-map.vercel.app/',
        }}
        onMessage={({nativeEvent}) => {
          const {data, type} = JSON.parse(nativeEvent.data);

          if (type === 'favoriteLocationAddress') {
            setFavoriteLocationList(data);
          }
        }}
        style={mapStyles.webview}
      />
      <FavoriteButton />
    </>
  );
};

export default Map;

const mapStyles = StyleSheet.create({
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});
