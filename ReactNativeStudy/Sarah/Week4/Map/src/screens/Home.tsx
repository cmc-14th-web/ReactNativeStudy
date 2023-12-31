import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import WebView from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
  const [latitude, setLatitude] = useState<string>();
  const [longitude, setLogitude] = useState<string>();

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }, []);

  const geoLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        setLatitude(latitude);
        setLogitude(longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <>
      <WebView
        source={{uri: 'http://localhost:8080/'}}
        style={styles.webview}
        javaScriptEnabled={true}
        onLoadStart={syntheticEvent =>
          console.log('WebView load start:', syntheticEvent.nativeEvent)
        }
        onLoad={syntheticEvent =>
          console.log('WebView load finish:', syntheticEvent.nativeEvent)
        }
        onError={syntheticEvent =>
          console.log('WebView error:', syntheticEvent.nativeEvent)
        }
      />
      <Text> latitude: {latitude} </Text>
      <Text> longitude: {longitude} </Text>
      <TouchableOpacity
        onPress={() => geoLocation()}
        style={{backgroundColor: '#89B2E9'}}>
        <Text style={{color: 'white', textAlign: 'center'}}>
          Get GeoLocation Button
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});
