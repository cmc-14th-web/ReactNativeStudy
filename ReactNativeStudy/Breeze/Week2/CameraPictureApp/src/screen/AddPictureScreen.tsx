import React, {useState, useCallback} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import BottomSheet from '../components/BottomSheet';
import {useFocusEffect} from '@react-navigation/native';
import Icon from '../components/Icon';
import Gallery from '../assets/Gallery';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type/rootStack';

type AddPictureScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Picture'
>;

function AddPictureScreen({
  navigation,
}: {
  navigation: AddPictureScreenNavigationProp;
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const [response, setResponse] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [photoInfo, setPhotoInfo] = useState('');

  useFocusEffect(
    useCallback(() => {
      setModalVisible(true);
      return () => setModalVisible(false);
    }, []),
  );

  // 이미지 가져오기
  const getPictures = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true,
      },
      (response: any) => {
        // console.log(response.assets[0].base64)
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          console.log('Image Error : ' + response.errorCode);
        }

        setResponse(response);
        setImageFile(response.assets[0].base64);
      },
    );
    navigation.navigate('Home');
  };

  const openCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        includeBase64: true,
      });
      const results: any = result.assets;
      setPhotoInfo(results);
    } catch (err) {
      console.log(err);
    }
    navigation.navigate('Home');
  };

  return (
    <View style={{flex: 1}}>
      <Text>사진 추가페이지</Text>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        <View style={styles.wrapper}>
          <Pressable style={styles.content} onPress={openCamera}>
            <Icon icon="Camera" fill="white" />
            <Text style={styles.text}>카메라로 촬영하기</Text>
          </Pressable>
          <Pressable style={styles.content} onPress={getPictures}>
            <Gallery />
            <Text style={styles.text}>갤러리에서 선택하기</Text>
          </Pressable>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: 35,
    marginLeft: 24,
    marginTop: 13,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginLeft: 8,
  },
});

export default AddPictureScreen;
