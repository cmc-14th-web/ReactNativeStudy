import React from 'react';
import {View} from 'react-native';

const ScreenLayout = ({children}: {children: any}) => {
  return (
    <View style={{marginHorizontal: 32, marginVertical: 16}}>{children}</View>
  );
};

export default ScreenLayout;
