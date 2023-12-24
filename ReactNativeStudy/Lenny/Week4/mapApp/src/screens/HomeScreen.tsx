import {WEB_URI} from '@env';
import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useRef} from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import WebView from 'react-native-webview';

const {width, height} = Dimensions.get('screen');

export default function HomeScreen() {
  const currentRef = useRef<WebView>(null);
  const sendCurrentLocation = () => {
    Geolocation.getCurrentPosition(info =>
      currentRef.current?.postMessage(JSON.stringify(info)),
    );
  };
  useEffect(() => {
    const sendLocation = setTimeout(() => {
      sendCurrentLocation();
      clearInterval(sendLocation);
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={currentRef}
        style={styles.webview}
        source={{uri: `${WEB_URI}`}}
        onMessage={e => console.log(e.nativeEvent.data)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: width,
    height: height,
  },
});
