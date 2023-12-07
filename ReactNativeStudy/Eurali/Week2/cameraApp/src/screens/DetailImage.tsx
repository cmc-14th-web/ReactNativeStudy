import React from 'react';
import {Image, View} from 'react-native';
import useStore from '../store';
import colors from '../styles/colors';

const DetailImage = () => {
  const curImageInfo = useStore(state => state.curImageInfo);
  const setIsHome = useStore(state => state.setIsHome);

  setIsHome(false);

  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 50,
        backgroundColor: colors.DeepDarkGrey,
      }}>
      <Image
        source={{uri: curImageInfo?.path}}
        style={{width: '100%', height: '80%'}}
      />
    </View>
  );
};

export default DetailImage;
