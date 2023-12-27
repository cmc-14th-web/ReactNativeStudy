import React, {useEffect, useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import useLocationState from '../libraries/recoil/hooks/useLocationState';
import useBookmarkState from '../libraries/recoil/hooks/useBookmarkState';
import Container from '../components/Container';
import {RootStackParamList} from '../navigators/RootNavigator';
import type {Location} from '../types/location';

type MapScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export default function HomeScreen() {
  const navigation = useNavigation<MapScreenNavigationProp>();
  const {location} = useLocationState();
  const {addBookmarks} = useBookmarkState();
  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    async function initializeData() {
      postMessage({type: 'init', data: location});
    }

    initializeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function postMessage(message: {type: string; data: Partial<Location>}) {
    try {
      if (webViewRef.current) {
        webViewRef.current.postMessage(JSON.stringify(message));
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleMessage = (event: WebViewMessageEvent) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);
      switch (message?.type) {
        case 'favoriteLocation': {
          addBookmarks(message.data);
          break;
        }
        case 'navigateBookmarkPage': {
          navigation.navigate('BookmarksScreen');
          break;
        }
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <WebView
        ref={webViewRef}
        source={{uri: 'http://172.30.1.15:3000'}}
        onMessage={handleMessage}
        injectedJavaScript={injectedJavaScript}
        // onLoadStart={() => postMessage({type: 'init', data: location})}
      />
    </Container>
  );
}

const injectedJavaScript = `(function() {
  window.sendMessageToReactNative = function(message) {
    if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
      window.ReactNativeWebView.postMessage(JSON.stringify(message));
    } else {
      console.error('ReactNativeWebView is not available.');
    }
  };

  var originalConsoleLog = console.log;
  console.log = function() {
    originalConsoleLog.apply(console, arguments);
    window.ReactNativeWebView.postMessage(JSON.stringify(arguments));
  };
})();`;
