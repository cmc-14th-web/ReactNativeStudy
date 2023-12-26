import React, { useEffect, useRef } from 'react';
import { PermissionsAndroid, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';
import Geolocation from 'react-native-geolocation-service';

import { MAP_WEB_VIEW_LINK } from './src/constant/link';

function App(): React.JSX.Element {
  const mapRef = useRef<any>();

  useEffect(() => {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ]);
  }, []);

  const postPostion = (position: Geolocation.GeoPosition) => {
    mapRef.current.postMessage(JSON.stringify({
      ...position.coords,
      type: 'map',
    }));
  }

  const handleMessage = () => {
    Geolocation.getCurrentPosition((position) => {
      postPostion(position);
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: MAP_WEB_VIEW_LINK }}
        ref={mapRef}
        onLoadEnd={handleMessage}
      />
    </SafeAreaView>
  );
}

export default App;