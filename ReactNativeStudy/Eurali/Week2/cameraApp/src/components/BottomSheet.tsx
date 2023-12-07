import React, {useEffect, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import useStore from '../store';
import CameraIcon from '../assets/icons/camera.svg';
import GalleryIcon from '../assets/icons/gallery.svg';
import colors from '../styles/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImageCropPicker from 'react-native-image-crop-picker';

const BottomSheetComp = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const isClosed = useStore(state => state.isClosed);
  const setIsClosed = useStore(state => state.setIsClosed);
  const addImage = useStore(state => state.addImage);

  // variables
  const snapPoints = useMemo(() => ['1%', '20%'], []);

  // callbacks
  const handleSheetChanges = (index: number) => {
    console.log(index);
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

  // const renderBackdrop = useCallback((props: any) => {
  //   setIsClosed(true);
  //   return <BottomSheetBackdrop {...props} pressBehavior="close" />;
  // }, []);

  // const renderBackdrop = useCallback(
  //   (props: any) => <BottomSheetBackdrop {...props} pressBehavior="close" />,
  //   [],
  // );

  const handleClickCamera = () => {
    // console.log('camera clicked');
    // navigation.push('Camera');
    setIsClosed(true);
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      if (Platform.OS === 'android') {
        const {mime, modificationDate, path} = image;
        addImage({mime, modificationDate, path});
      } else {
        const {mime, creationDate: modificationDate, sourceURL: path} = image;
        addImage({mime, modificationDate, path});
      }
    });
  };

  const handleClickGallery = () => {
    setIsClosed(true);
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      if (Platform.OS === 'android') {
        const {mime, modificationDate, path} = image;
        addImage({mime, modificationDate, path});
      } else {
        const {mime, creationDate: modificationDate, sourceURL: path} = image;
        addImage({mime, modificationDate, path});
      }
    });
  };

  // renders
  return (
    <View style={{...styles.container, display: isClosed ? 'none' : undefined}}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        // backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleStyle={{
          backgroundColor: colors.DarkGrey,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
        handleIndicatorStyle={{backgroundColor: colors.lightGrey}}>
        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={handleClickCamera}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <CameraIcon />
              <Text style={{color: colors.white}}> 카메라로 촬영하기 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClickGallery}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 7,
                paddingHorizontal: 23,
                paddingVertical: 10,
              }}>
              <GalleryIcon />
              <Text style={{color: colors.white}}> 갤러리에서 선택하기 </Text>
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
  contentContainer: {
    flex: 1,
    backgroundColor: colors.DarkGrey,
    paddingVertical: 10,
  },
});

export default BottomSheetComp;
