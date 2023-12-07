import React, {useEffect} from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {PERMISSIONS, RESULTS, requestMultiple} from 'react-native-permissions';
import SplashScreen from 'react-native-splash-screen';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import Header from '../components/Header';
import useNavigator from '../hooks/useNavigation';
import detailImageState from '../store/detailImage';
import imageListState from '../store/image';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000); //스플래시 활성화 시간
  });

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    try {
      const PermissionStatus = await requestMultiple([
        PERMISSIONS.IOS.CAMERA,
        PERMISSIONS.IOS.PHOTO_LIBRARY,
      ]);

      if (
        PermissionStatus[PERMISSIONS.IOS.CAMERA] === RESULTS.GRANTED &&
        PermissionStatus[PERMISSIONS.IOS.PHOTO_LIBRARY]
      ) {
      } else if (PermissionStatus[PERMISSIONS.IOS.CAMERA] !== RESULTS.GRANTED) {
        Alert.alert('카메라 권한이 거부되었습니다.');
      } else if (
        PermissionStatus[PERMISSIONS.IOS.PHOTO_LIBRARY] !== RESULTS.GRANTED
      ) {
        Alert.alert('갤러리 권한이 거부되었습니다.');
      }
      return PermissionStatus;
    } catch (error) {
      console.error('Error requesting permission:', error);
      return RESULTS.UNAVAILABLE; // or handle the error as needed
    }
  };

  const imageList = useRecoilValue(imageListState);
  const stackNavigation = useNavigator();
  const setDetailImage = useSetRecoilState(detailImageState);
  return (
    <View style={styles.View}>
      <Header title="CMC님의 사진첩" />
      <View style={styles.Container}>
        <FlatList
          data={imageList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setDetailImage(item);
                stackNavigation.navigate('Gallery');
              }}>
              <Image source={{uri: item.path}} width={100} height={100} />
            </TouchableOpacity>
          )}
          numColumns={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flex: 1,
  },
  Container: {
    flex: 1,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
