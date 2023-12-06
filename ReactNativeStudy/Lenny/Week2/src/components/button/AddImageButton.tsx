import React, {useMemo, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CameraSvg from '../../assets/camera.svg';
import GallerySvg from '../../assets/gallery.svg';
import BottomSheet from '@gorhom/bottom-sheet';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {useStore} from '../../store/store';
import {ImageDataType, SelectedImageDataType} from '../../types/ImageType';
import {deviceWidth, deviceHight} from '../../constants/device';
import AddSvg from '../AddSvg';

export default function AddImageButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {bottom} = useSafeAreaInsets();
  const {setImages} = useStore();
  const currentImages = useRef<SelectedImageDataType[]>([]);
  let selectedImagesCount = 1;

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['20%'], []);

  const openEdit = async (selectedImages: ImageOrVideo[] | ImageDataType[]) => {
    const selectedImagesLength = selectedImages.length;
    // 1개씩 순서대로 자르기 위해 async await와 재귀함수 사용
    await ImagePicker.openCropper({
      path: selectedImages[selectedImagesLength - selectedImagesCount].path,
      mediaType: 'photo',
      width: (deviceWidth - 32) / 3,
      height: (deviceWidth - 32) / 3,
    })
      .then(async image => {
        selectedImagesCount++;
        currentImages.current = [
          ...currentImages.current,
          {
            creationDate: new Date(),
            path: image.path,
            height: image.height,
            width: image.width,
          },
        ];
        if (selectedImagesCount <= selectedImagesLength) {
          await openEdit(selectedImages);
        }
      })
      .catch(err => console.log(err));
  };

  const handleCloseButton = () => {
    bottomSheetRef.current?.close();
    setIsOpen(false);
  };

  const handleOpenButton = () => {
    bottomSheetRef.current?.snapToIndex(0);
    setIsOpen(true);
  };

  const handleSheetChanges = (index: number) => {
    if (index === -1) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <TouchableOpacity
        style={{
          display: isOpen ? 'flex' : 'none',
          ...styles.bottomSheetBackgroundStyle,
        }}
        activeOpacity={0.5}
        onPress={handleCloseButton}
      />
      <TouchableOpacity
        onPress={handleOpenButton}
        style={{
          bottom: bottom + 22.5,
          ...styles.addButtonStyle,
        }}>
        <AddSvg />
      </TouchableOpacity>
      <BottomSheet
        containerStyle={styles.bottomSheetContainerStyle}
        ref={bottomSheetRef}
        index={-1}
        enablePanDownToClose={true}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.bottomSheetWrapStyle}>
          <TouchableOpacity style={styles.bottomSheetButtonStyle}>
            <CameraSvg style={styles.bottomSheetButtonSvgStyle} color="black" />
            <Text style={styles.bottomSheetButtonTextStyle}>
              카메라로 촬영하기
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomSheetButtonStyle}
            onPress={() =>
              // 다수 선택 모드로 갤러리 열기
              ImagePicker.openPicker({
                multiple: true,
              })
                .then(
                  async (selectedImages: ImageOrVideo[] | ImageDataType[]) => {
                    // 선택을 완료했다면 갤러리 닫기
                    handleCloseButton();
                    // 자르기 모드로 진입
                    await openEdit(selectedImages);
                    setImages(currentImages.current);
                  },
                )
                .catch(e => {
                  console.log(e);
                })
            }>
            <GallerySvg
              style={styles.bottomSheetButtonSvgStyle}
              color="black"
            />
            <Text style={styles.bottomSheetButtonTextStyle}>
              갤러리에서 선택하기
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  bottomSheetBackgroundStyle: {
    position: 'absolute',
    flex: 1,
    height: deviceHight,
    width: deviceWidth,
    backgroundColor: 'black',
    opacity: 0.5,
    zIndex: 1,
  },
  addButtonStyle: {
    position: 'absolute',
    alignSelf: 'center',
  },
  bottomSheetContainerStyle: {
    position: 'absolute',
    zIndex: 2,
  },
  bottomSheetWrapStyle: {
    flex: 1,
    paddingLeft: 24,
    justifyContent: 'space-evenly',
  },
  bottomSheetButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomSheetButtonSvgStyle: {
    marginRight: 8,
  },
  bottomSheetButtonTextStyle: {
    fontSize: 16,
  },
});
