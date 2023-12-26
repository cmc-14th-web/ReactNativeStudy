import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import Geolocation from '@react-native-community/geolocation';
import {useCallback, useEffect, useRef} from 'react';

import {windowWidth, windowHeight} from '../../constants/screenSize';

const Map = () => {
  const webViewRef = useRef<WebView>(null);

  const sendCurrentPosition = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {coords} = position;
        const message = {
          type: 'location',
          payload: {
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
        };

        setInterval(() => {
          webViewRef.current?.postMessage(JSON.stringify(message));
        }, 2000);
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
    <WebView
      ref={webViewRef}
      source={{
        uri: 'https://cmc-map.vercel.app/',
      }}
      style={mapStyles.webview}
    />
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
