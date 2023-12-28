import React, {useEffect, useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import useLocationState from '../libraries/recoil/hooks/useLocationState';
import useBookmarkState from '../libraries/recoil/hooks/useBookmarkState';
import Container from '../components/Container';
import {RootStackParamList} from '../navigators/RootNavigator';
import type {Location} from '../types/location';
import {Message} from '../types/message';

type MapScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export default function HomeScreen() {
  const navigation = useNavigation<MapScreenNavigationProp>();
  const {location} = useLocationState();
  const {bookmarks, addBookmarks} = useBookmarkState();
  const webViewRef = useRef<WebView>(null);
  useEffect(() => {
    async function initializeData() {
      const message: Message<Partial<Location>> = {
        type: 'init',
        // data: {lat: 37.74, lng: -122.41},
        data: location,
      };

      postMessage(message);
    }

    initializeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    postMessage({type: 'bookmarks', data: bookmarks});
  }, [bookmarks]);

  async function postMessage(message: Message) {
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
      const {type, data} = JSON.parse(event.nativeEvent.data);
      // console.log(type, data);
      switch (type) {
        case 'favoriteLocation': {
          addBookmarks(data);
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
        source={{uri: 'http://127.0.0.1:3000'}}
        onMessage={handleMessage}
        injectedJavaScript={injectedJavaScript}
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
