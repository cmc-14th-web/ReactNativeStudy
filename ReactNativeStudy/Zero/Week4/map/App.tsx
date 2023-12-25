import React from 'react';
import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

import { MAP_WEB_VIEW_LINK } from './src/constant/link';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: MAP_WEB_VIEW_LINK }} />
    </SafeAreaView>
  );
}

export default App;