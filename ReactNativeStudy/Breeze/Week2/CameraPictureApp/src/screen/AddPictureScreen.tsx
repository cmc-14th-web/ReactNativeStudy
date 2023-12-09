import React, {useState, useCallback} from 'react';
import {useSetRecoilState} from 'recoil';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from '../components/BottomSheet';
import {useFocusEffect} from '@react-navigation/native';
import Icon from '../components/Icon';
import Gallery from '../assets/Gallery';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type/navigator';
import {pictureState} from '../recoil/atom';

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
  const setPicture = useSetRecoilState(pictureState);

  useFocusEffect(
    useCallback(() => {
      setModalVisible(true);
      return () => setModalVisible(false);
    }, []),
  );

  // 갤러리에서 이미지 가져오기
  const getPictures = useCallback(async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        includeBase64: true,
        width: 512,
        height: 512,
      });

      if (image?.path) {
        setPicture(prevPictures => [...prevPictures, image.path]);
      }
    } catch (err) {
      console.error(err);
    }
    navigation.navigate('Home');
  }, [navigation, setPicture]);

  // 카메라 사진 찍기
  const openCamera = useCallback(async () => {
    try {
      const image = await ImagePicker.openCamera({
        mediaType: 'photo',
        includeBase64: true,
        width: 512,
        height: 512,
        cropping: true,
      });

      if (image?.path) {
        const croppedImage = await ImagePicker.openCropper({
          path: image.path,
          width: 512,
          height: 512,
          mediaType: 'photo',
        });

        if (croppedImage) {
          setPicture(prevPictures => [...prevPictures, croppedImage.path]);
        }
      }
    } catch (err) {
      console.error(err);
    }
    navigation.navigate('Home');
  }, [navigation, setPicture]);

  return (
    <View style={{flex: 1}}>
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
