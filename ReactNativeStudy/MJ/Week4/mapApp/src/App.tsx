import React, {useEffect} from 'react';
import WebView from 'react-native-webview';
import {requestLocationPermissions} from './utils/permissions';
import ScreenContainer from './components/ScreenContainer';

const App = () => {
  useEffect(() => {
    requestLocationPermissions();
  }, []);

  return (
    <ScreenContainer>
      <WebView source={{uri: 'http://localhost:5173'}} />
    </ScreenContainer>
  );
};

export default App;
