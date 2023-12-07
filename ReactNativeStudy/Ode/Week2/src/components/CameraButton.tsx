import React, {useRef, useMemo, useCallback} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import getCameraImage from '../utils/getCameraImage';
import useImagesStorage from '../hooks/useImagesStorage';
import moment from 'moment';

export default function CameraButton() {
  // const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleOpen = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const {appendImage} = useImagesStorage();
  const handleTakePhoto = async () => {
    bottomSheetRef.current?.close();
    const photo = await getCameraImage();
    if (photo) {
      const {width, height, path} = photo;
      appendImage({
        width,
        height,
        path,
        creationDate: moment(photo.creationDate ?? undefined).format(
          'YYYY.MM.DD HH:mm',
        ),
      });
    }
  };

  const handleChooseFromLibrary = () => {
    bottomSheetRef.current?.close();
  };

  const snapPoints = useMemo(() => ['25%'], []);

  return (
    <>
      <TouchableOpacity style={styles.cameraButton} onPress={handleOpen}>
        <Text>+</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose>
        <View style={styles.container}>
          <Button title="카메라로 촬영하기" onPress={handleTakePhoto} />
          <Button
            title="갤러리에서 선택하기"
            onPress={handleChooseFromLibrary}
          />
        </View>
      </BottomSheet>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 10,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    fontSize: 30,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
  },
});
