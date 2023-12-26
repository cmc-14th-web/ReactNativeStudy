import React, {useEffect, useRef} from 'react';
import Container from '../components/Container';
import WebView from 'react-native-webview';
import useLocationState from '../libraries/recoil/useLocationState';

export default function HomeScreen() {
  const {location} = useLocationState();
  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    async function initializeData() {
      location;
      postMessage({type: 'init', data: {lat: 39, lng: 127}});
    }

    initializeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function postMessage(message: {type: string; data: any}) {
    try {
      if (webViewRef.current) {
        webViewRef.current.postMessage(JSON.stringify(message));
      }
    } catch (error) {
      console.error(error);
    }
  }

  const eventScript = `function sendFavoriteClicked() {
    window.ReactNativeWebView.postMessage(
      JSON.stringify(
          {
          type: 'favoriteLocation',
          data: '${JSON.stringify(location)}'
        },
      )
    );
  }
  window.addEventListener("click", sendFavoriteClicked);
  true;`;

  return (
    <Container>
      <WebView
        ref={webViewRef}
        source={{uri: 'http://172.30.1.69:3000'}}
        onMessage={event => {
          console.log(event.nativeEvent.data);
          const message = JSON.parse(event.nativeEvent.data);
          switch (message?.type) {
            case 'favoriteLocation': {
              const loc = message.data;
              console.log('favoriteLocation', loc);
            }
          }
        }}
        onLoad={() => webViewRef.current?.injectJavaScript(eventScript)}
        onLoadStart={() => postMessage({type: 'init', data: location})}
      />
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
