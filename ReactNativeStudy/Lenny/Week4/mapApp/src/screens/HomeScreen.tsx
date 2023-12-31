import {WEB_URI} from '@env';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, Dimensions, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import Loading from '../components/Loading';
import {useStore} from '../store/store';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import initialRequest from '../utils/initialRequest';
import realTimeRequest from '../utils/realTimeRequest';

const {width, height} = Dimensions.get('screen');

export default function HomeScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  const currentRef = useRef<WebView>(null);
  const {setFavoriteMarkerLists} = useStore();
  const {top: topInset} = useSafeAreaInsets();

  useEffect(() => {
    const sendDeviceInformation = setInterval(() => {
      initialRequest(currentRef, topInset);
      clearInterval(sendDeviceInformation);
    }, 500);
    if (!loading) {
      setInterval(() => {
        realTimeRequest(currentRef);
      }, 2000);
    }
  }, [loading, topInset]);

  const handleOnMessage = (e: any) => {
    const getData = JSON.parse(e.nativeEvent.data);
    const getDataType = getData.type;

    switch (getDataType) {
      case 'init':
        setLoading(getData.loading);
        break;
      case 'updateData':
        setFavoriteMarkerLists([...getData.favoriteMarkerInformationLists]);
        break;
      default:
        Alert.alert('Something went wrong!');
    }
  };

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <WebView
        ref={currentRef}
        style={loading ? styles.loading : styles.webview}
        source={{uri: `${WEB_URI}`}}
        onMessage={handleOnMessage}
        scrollEnabled={false}
      />
    </View>
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
