import React from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{uri: 'http://localhost:5173'}} />
    </SafeAreaView>
  );
}

export default App;
