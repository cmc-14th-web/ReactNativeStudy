import React, {useEffect, useRef, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    const requestLocationPermissions = async () => {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);

        if (
          granted['android.permission.ACCESS_COARSE_LOCATION'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.ACCESS_FINE_LOCATION'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          // 위치 권한이 허용되면 현재 위치를 가져오기 시작합니다.
          Geolocation.getCurrentPosition(
            info => {
              setCurrentLocation({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
              });
            },
            error => {
              console.log(error);
            },
            {
              enableHighAccuracy: true,
              timeout: 20000,
            },
          );
        } else {
          console.log('위치 권한이 거부되었습니다.');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    // 권한을 요청하고 현재 위치를 가져오는 함수를 호출합니다.
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    const message = {
      type: 'location',
      payload: currentLocation,
    };
    console.log('web으로 전송', message);

    webViewRef.current?.postMessage(JSON.stringify(message));
  }, [currentLocation]);

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'http://192.168.35.70:3000/'}}
        //onMessage={receiveMessage} // 웹에서 데이터를 받아오기
        //onLoadStart={handleLoadStart}
        ref={webViewRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
