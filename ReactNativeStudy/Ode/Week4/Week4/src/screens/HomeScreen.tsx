import React, {useEffect, useRef} from 'react';
import Container from '../components/Container';
import WebView from 'react-native-webview';

export default function HomeScreen() {
  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    sendDataToWeb();
  }, []);

  function sendDataToWeb() {
    if (!webViewRef.current) {
      console.error("there's no webViewRef");

      return;
    }

    const message: MapData = {
      lat: 37.7749,
      lng: -122.4194,
      initialCenter: {
        lat: 37.7749,
        lng: -122.4194,
      },
    };

    webViewRef.current.postMessage(JSON.stringify(message));
  }

  return (
    <Container>
      <WebView
        ref={webViewRef}
        source={{uri: 'http://localhost:3000'}}
        onMessage={event => {
          console.log(event.target);
        }}
      />
    </Container>
  );
}

type MapData = {
  lat: number;
  lng: number;
  initialCenter: {
    lat: number;
    lng: number;
  };
};
