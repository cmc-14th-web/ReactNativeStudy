import React, {useEffect, useRef} from 'react';
import WebView from 'react-native-webview';
import {requestLocationPermissions} from './utils/permissions';
import ScreenContainer from './components/ScreenContainer';
import {useLocationStore} from './store/useLocation';
import useGeolocation from './hooks/useGeolocation';

const App = () => {
  useGeolocation();
  const webViewRef = useRef<WebView | null>(null);
  const {location} = useLocationStore(state => state);

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

export default App;
