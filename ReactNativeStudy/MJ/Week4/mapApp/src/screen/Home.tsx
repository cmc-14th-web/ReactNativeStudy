import React, {useEffect, useRef} from 'react';
import ScreenContainer from '../components/ScreenContainer';
import useGeolocation from '../hooks/useGeolocation';
import WebView from 'react-native-webview';
import {useLocationStore} from '../store/useLocation';
import {requestLocationPermissions} from '../utils/permissions';

const Home = () => {
  useGeolocation();

  const webViewRef = useRef<WebView | null>(null);
  const location = useLocationStore(state => state.location);

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    if (webViewRef.current) {
      webViewRef.current.postMessage(
        JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
        }),
      );
    }
  }, [location]);

  return (
    <ScreenContainer>
      <WebView ref={webViewRef} source={{uri: 'http://localhost:5173'}} />
    </ScreenContainer>
  );
};

export default Home;
