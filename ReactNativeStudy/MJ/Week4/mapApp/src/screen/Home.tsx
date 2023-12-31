import React, {useEffect, useRef, useState} from 'react';
import ScreenContainer from '../components/ScreenContainer';
import useGeolocation from '../hooks/useGeolocation';
import WebView from 'react-native-webview';
import {useLocationStore} from '../store/useLocation';
import {requestLocationPermissions} from '../utils/permissions';
import useStar, {Star} from '../store/useStar';
import IconFactory from '../components/IconFactory';
import {Text, TouchableOpacity} from 'react-native';
import palette from '../utils/palette';

const Home = () => {
  useGeolocation();
  const [star, setStar] = useState<Star | null>(null);
  const webViewRef = useRef<WebView | null>(null);
  const location = useLocationStore(state => state.location);
  const {stars, addStar} = useStar(state => state);

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    if (webViewRef.current) {
      webViewRef.current.postMessage(
        JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
          type: location.type,
        }),
      );
    }
  }, [location]);

  const handleWebViewMessage = (event: any) => {
    const message: Star = JSON.parse(event.nativeEvent.data);
    console.log(event, message);
    setStar(message);
  };

  const isStar = stars.find(
    v => v.latitude === star?.latitude && v.longitude === star?.longitude,
  );

  const [isClick, setIsClick] = useState(false);

  return (
    <ScreenContainer>
      {
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            backgroundColor: isClick ? palette.Blue600 : palette.Gray600,
            borderRadius: 50,
            zIndex: 1,
            top: 50,
            left: 10,
            padding: 5,
          }}
          onPress={() => {
            setIsClick(prev => !prev);
            if (isClick) {
              webViewRef.current?.postMessage(
                JSON.stringify({
                  type: 'stars',
                  stars: stars,
                }),
              );
            } else {
              webViewRef.current?.postMessage(
                JSON.stringify({
                  type: 'stars',
                  stars: [],
                }),
              );
            }
          }}>
          <IconFactory icon="Star" fill={palette.White} />
          <Text style={{color: 'white'}}>즐겨찾기</Text>
        </TouchableOpacity>
      }
      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: isStar ? palette.Blue600 : palette.Gray600,
          borderRadius: 50,
          zIndex: 1,
          top: 50,
          right: 10,
        }}
        onPress={() => {
          if (star) {
            addStar(star);
          }
        }}>
        <IconFactory icon="Star" fill={palette.White} />
      </TouchableOpacity>
      <WebView
        ref={webViewRef}
        source={{uri: 'http://localhost:5173'}}
        onMessage={handleWebViewMessage}
      />
    </ScreenContainer>
  );
};

export default Home;
