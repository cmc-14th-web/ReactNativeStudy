import {WEB_URI} from '@env';
import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import sendCurrentLocation from '../utils/sendCurrentLocation';
import Loading from '../components/Loading';

const {width, height} = Dimensions.get('screen');

export default function HomeScreen() {
  const currentRef = useRef<WebView>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      sendCurrentLocation(currentRef);
    }, 1000);
  }, []);

  const handleOnMessage = (e: any) => {
    const loadingState = JSON.parse(e.nativeEvent.data);
    setLoading(loadingState.loading);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      <WebView
        ref={currentRef}
        style={loading ? styles.loading : styles.webview}
        source={{uri: `${WEB_URI}`}}
        onMessage={handleOnMessage}
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    display: 'none',
  },
  webview: {
    flex: 1,
    width: width,
    height: height,
  },
});
