import {useCallback, useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import Geolocation from '@react-native-community/geolocation';

import {windowWidth, windowHeight} from '../constants/screenSize';
import {MAP_API_URL} from '../constants/api';
import FavoriteButton from './FavoriteButton';

const Map = () => {
  const webViewRef = useRef<WebView>(null);

  const sendCurrentPosition = useCallback(() => {
    const watchId = Geolocation.watchPosition(
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

    return watchId;
  }, []);

  useEffect(() => {
    const watchId = sendCurrentPosition();

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <>
      <WebView
        ref={webViewRef}
        source={{
          uri: MAP_API_URL,
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
