import {WEB_URI} from '@env';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, Dimensions, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import sendCurrentLocation from '../utils/sendCurrentLocation';
import Loading from '../components/Loading';
import {useStore} from '../store/store';
import Container from '../components/Container';

const {width, height} = Dimensions.get('screen');

export default function HomeScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  const currentRef = useRef<WebView>(null);
  const {setFavoriteMarkers} = useStore();

  useEffect(() => {
    setTimeout(() => {
      sendCurrentLocation(currentRef);
    }, 1000);
  }, []);

  const handleOnMessage = (e: any) => {
    const getData = JSON.parse(e.nativeEvent.data);
    const getDataType = getData.type;

    switch (getDataType) {
      case 'init':
        setLoading(getData.loading);
        break;
      case 'addData':
      case 'removeData':
        setFavoriteMarkers([...getData.favoriteMarkerLists]);
        break;
      default:
        Alert.alert('Something went wrong!');
    }
  };

  return (
    <Container>
      {loading && <Loading />}
      <WebView
        ref={currentRef}
        style={loading ? styles.loading : styles.webview}
        source={{uri: `${WEB_URI}`}}
        onMessage={handleOnMessage}
        scrollEnabled={false}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  loading: {
    display: 'none',
  },
  webview: {
    flex: 1,
    width: width,
    height: height,
  },
});
