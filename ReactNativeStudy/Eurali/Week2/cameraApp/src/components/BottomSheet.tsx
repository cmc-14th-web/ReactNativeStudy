import React, {useEffect, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import useStore from '../store';
import CameraIcon from '../assets/icons/camera.svg';
import GalleryIcon from '../assets/icons/gallery.svg';
import colors from '../styles/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImageCropPicker from 'react-native-image-crop-picker';

const BottomSheetComp = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const isClosed = useStore(state => state.isClosed);
  const setIsClosed = useStore(state => state.setIsClosed);
  const addImage = useStore(state => state.addImage);

  const snapPoints = useMemo(() => ['1%', '20%'], []);

  const handleSheetChanges = (index: number) => {
    if (index === 0) {
      setIsClosed(true);
    }
  };

  useEffect(() => {
    if (isClosed === false) {
      bottomSheetRef?.current?.expand();
    } else {
      bottomSheetRef?.current?.close();
    }
  }, [isClosed]);

  const imageCropInfo = {
    width: 300,
    height: 400,
    cropping: true,
  };

  const storeImage = (image: any) => {
    if (Platform.OS === 'android') {
      const {mime, modificationDate, path} = image;
      addImage({mime, modificationDate, path});
    } else {
      const {mime, creationDate: modificationDate, sourceURL: path} = image;
      addImage({mime, modificationDate, path});
    }
  };

  const handleClickCamera = () => {
    setIsClosed(true);
    ImageCropPicker.openCamera(imageCropInfo).then(image => {
      storeImage(image);
    });
  };

  const handleClickGallery = () => {
    setIsClosed(true);
    ImageCropPicker.openPicker(imageCropInfo).then(image => {
      storeImage(image);
    });
  };

  return (
    <View style={isClosed ? styles.hiddenContainer : styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleStyle={styles.handle}
        handleIndicatorStyle={styles.handleIndicator}>
        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={handleClickCamera}>
            <View style={styles.camera}>
              <CameraIcon />
              <Text style={styles.text}> 카메라로 촬영하기 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClickGallery}>
            <View style={styles.gallery}>
              <GalleryIcon />
              <Text style={styles.text}> 갤러리에서 선택하기 </Text>
            </View>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    zIndex: 9,
    padding: 24,
    backgroundColor: 'transparent',
  },
  hiddenContainer: {
    display: 'none',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.DarkGrey,
    paddingVertical: 10,
  },
  handle: {
    backgroundColor: colors.DarkGrey,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  handleIndicator: {
    backgroundColor: colors.lightGrey,
  },
  camera: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  gallery: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 23,
    paddingVertical: 10,
  },
  text: {
    color: colors.white,
  },
});

export default BottomSheetComp;
