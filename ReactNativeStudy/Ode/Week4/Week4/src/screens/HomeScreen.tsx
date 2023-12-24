import React, {useEffect, useRef} from 'react';
import Container from '../components/Container';
import WebView from 'react-native-webview';
import {TouchableOpacity, Text} from 'react-native';
import useLocationState from '../libraries/recoil/useLocationState';

export default function HomeScreen() {
  const {location} = useLocationState();
  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    async function initializeData() {
      postMessage({type: 'init', data: location});
    }

    initializeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function sendDataToWeb() {
    postMessage({
      type: 'location',
      data: {lat: 39, lng: 127},
    });
  }

  async function postMessage(message: {type: string; data: any}) {
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
        source={{uri: 'http://172.30.1.100:3000'}}
        injectedJavaScript={`(function() {
          var originalConsoleLog = console.log;
          console.log = function() {
            originalConsoleLog.apply(console, arguments);
            window.ReactNativeWebView.postMessage(JSON.stringify(arguments));
          };
        })();`}
        onMessage={event => {
          console.debug(
            'success to send current location',
            event.nativeEvent.data,
          );
        }}
      />
      <TouchableOpacity onPress={sendDataToWeb}>
        <Text>웹뷰로 데이터 전송</Text>
      </TouchableOpacity>
    </Container>
  );
}

export type MapData = {
  lat: number;
  lng: number;
  initialCenter: {
    lat: number;
    lng: number;
  };
};
