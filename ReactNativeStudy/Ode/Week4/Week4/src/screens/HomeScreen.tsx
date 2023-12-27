import React, {useEffect, useRef} from 'react';
import Container from '../components/Container';
import WebView from 'react-native-webview';
import useLocationState from '../libraries/recoil/hooks/useLocationState';
import useBookmarkState from '../libraries/recoil/hooks/useBookmarkState';
import {Location} from '../types/location';

export default function HomeScreen() {
  const {location} = useLocationState();
  const {addBookmarks} = useBookmarkState();

  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    async function initializeData() {
      location;
      postMessage({type: 'init', data: {lat: 39, lng: 127}});
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

  return (
    <Container>
      <WebView
        ref={webViewRef}
        source={{uri: 'http://172.30.1.15:3000'}}
        onMessage={event => {
          const message = JSON.parse(JSON.parse(event.nativeEvent.data));
          console.log('event', message);
          switch (message?.type) {
            case 'favoriteLocation': {
              console.debug(message.data);
              addBookmarks(message.data);
            }
          }
        }}
        injectedJavaScript={`(function() {
          window.sendMessageToReactNative = function(message) {
            if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
              window.ReactNativeWebView.postMessage(JSON.stringify(message));
            } else {
              console.error('ReactNativeWebView is not available.');
            }
          };
        })();`}
        onLoadStart={() => postMessage({type: 'init', data: location})}
      />
    </Container>
  );
}
