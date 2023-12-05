import {useFocusEffect} from '@react-navigation/native';
import CustomBottomSheet from 'components/atoms/CustomBottomSheet';
import {useCallback, useState} from 'react';
import {View} from 'react-native';

const AddPhoto = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setIsBottomSheetOpen(true);
    }, []),
  );

  return (
    <View>
      <CustomBottomSheet
        isBottomSheetOpen={isBottomSheetOpen}
        setIsBottomSheetOpen={setIsBottomSheetOpen}
      />
    </View>
  );
};

export default AddPhoto;
