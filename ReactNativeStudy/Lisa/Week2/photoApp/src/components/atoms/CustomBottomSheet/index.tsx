import SvgIcons from 'assets/icons/SvgIcons';
import {Dispatch, SetStateAction, useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {theme} from 'styles/theme';
import {typoStyles} from 'styles/typo';

const CustomBottomSheet = ({
  isBottomSheetOpen,
  setIsBottomSheetOpen,
}: {
  isBottomSheetOpen: boolean;
  setIsBottomSheetOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const bottomSheetRef = useRef<RBSheet>(null);

  useEffect(() => {
    isBottomSheetOpen
      ? bottomSheetRef.current!.open()
      : bottomSheetRef.current!.close();
  }, [isBottomSheetOpen]);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <RBSheet
      ref={bottomSheetRef}
      onOpen={handleOpenBottomSheet}
      onClose={handleCloseBottomSheet}
      height={166}
      customStyles={customBottomSheetStyles}>
      <View style={bottomSheetStyles.buttonContainer}>
        <TouchableOpacity style={bottomSheetStyles.button}>
          <SvgIcons.CameraIcon fill={'white'} />
          <Text style={bottomSheetStyles.text}>카메라로 촬영하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={bottomSheetStyles.galleryButton}>
          <SvgIcons.GalleryIcon fill={'white'} />
          <Text style={bottomSheetStyles.text}>갤러리에서 선택하기</Text>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

export default CustomBottomSheet;

const customBottomSheetStyles = {
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 18,
    paddingBottom: 40,
    paddingHorizontal: 24,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: `${theme.palette.gray_600}`,
  },
};

const bottomSheetStyles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  galleryButton: {},
  text: {
    fontSize: typoStyles.typo.body_2.fontSize,
    fontWeight: typoStyles.typo.body_2.fontWeight,
    color: theme.palette.white,
  },
});

bottomSheetStyles.galleryButton = {
  ...bottomSheetStyles.button,
  paddingLeft: 4,
  gap: 12,
};
