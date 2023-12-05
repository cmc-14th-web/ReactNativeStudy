import {useFocusEffect} from '@react-navigation/native';
import CustomBottomSheet from 'components/atoms/CustomBottomSheet';
import {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Home from 'screens/Home';
import {getScreenSize} from 'utils/getScreenSize';

const {screenHeight} = getScreenSize();

const AddPhoto = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setIsBottomSheetOpen(true);
    }, []),
  );

  return (
    <View style={AddPhotoStyle.container}>
      <Home />
      <CustomBottomSheet
        isBottomSheetOpen={isBottomSheetOpen}
        setIsBottomSheetOpen={setIsBottomSheetOpen}
      />
    </View>
  );
};

export default AddPhoto;

const AddPhotoStyle = StyleSheet.create({
  container: {
    height: screenHeight - 148,
  },
});
