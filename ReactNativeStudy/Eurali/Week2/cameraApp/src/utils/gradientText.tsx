import React from 'react';
import {Text} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = ({colors}: {colors: string[]}) => {
  return (
    <MaskedView maskElement={<Text />}>
      <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <Text />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
