import {WEB_URI} from '@env';
import React, {useRef} from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const {width, height} = Dimensions.get('screen');

export default function HomeScreen() {
  const currentRef = useRef<WebView>(null);
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={currentRef}
        style={styles.webview}
        source={{uri: `${WEB_URI}`}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: width,
    height: height,
  },
});
