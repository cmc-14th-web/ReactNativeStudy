import React, {useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CameraSvg from '../assets/camera.svg';
import GallerySvg from '../assets/gallery.svg';
import AddSvg from '../assets/add.svg';
import BottomSheet from '@gorhom/bottom-sheet';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

export default function AddPhotoButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {bottom} = useSafeAreaInsets();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['20%'], []);

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
          <TouchableOpacity style={styles.bottomSheetButtonStyle}>
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
    height: deviceHeight,
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
