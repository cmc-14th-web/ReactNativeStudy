import {SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

import {windowWidth, windowHeight} from './src/constants/screenSize';

function App(): JSX.Element {
  return (
    <SafeAreaView style={appStyles.container}>
      <WebView source={{uri: 'https://naver.com'}} style={appStyles.webview} />
    </SafeAreaView>
  );
}

export default App;

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});
