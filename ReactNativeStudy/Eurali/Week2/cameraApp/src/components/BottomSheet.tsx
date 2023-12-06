import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import useStore from '../store';
import CameraIcon from '../assets/icons/camera.svg';
import colors from '../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BottomSheetComp = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const isClosed = useStore(state => state.isClosed);
  const setIsClosed = useStore(state => state.setIsClosed);

  // variables
  const snapPoints = useMemo(() => ['20%', '100%'], []);

  // callbacks
  const handleSheetChanges = (index: number) => {
    if (index === 0) {
      setIsClosed(true);
    }
  };

  useEffect(() => {
    if (isClosed === false) {
      console.log('kkk', bottomSheetRef);
      bottomSheetRef?.current?.expand();
    }
  }, [isClosed]);

  // const renderBackdrop = useCallback((props: any) => {
  //   setIsClosed(true);
  //   return <BottomSheetBackdrop {...props} pressBehavior="close" />;
  // }, []);

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} pressBehavior="close" />,
    [],
  );

  const handleClickCamera = () => {
    console.log('clicked');
  };

  // renders
  return (
    <View style={{...styles.container, display: isClosed ? 'none' : undefined}}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleStyle={{backgroundColor: colors.DarkGrey}}
        handleIndicatorStyle={{backgroundColor: colors.lightGrey}}>
        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={handleClickCamera}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CameraIcon />
              <Text style={{color: colors.white}}> 카메라로 촬영하기 </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View> */}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '25%',
    bottom: 0,
    zIndex: 99,
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.DarkGrey,
    padding: 20,
  },
});

export default BottomSheetComp;
