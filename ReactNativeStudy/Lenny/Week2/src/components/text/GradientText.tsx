import React from 'react';
import {Text} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../styles/colors';

interface GradientTextProps {
  gradientColors: string[];
  [x: string]: any;
}

const GradientText = ({
  gradientColors,
  mode,
  isHome,
  ...rest
}: GradientTextProps) => {
  // mode가 0이면 Header에 쓰이는 GradienText
  // 1이면 TabBar에 쓰이는 GradienText
  const fontSize = mode === 0 ? 24 : 12;
  const inActivatedColor = [colors.lightGray, colors.lightGray];
  return (
    <MaskedView maskElement={<Text {...rest} style={{fontSize: fontSize}} />}>
      <LinearGradient
        colors={
          mode === 0
            ? gradientColors
            : isHome
            ? gradientColors
            : inActivatedColor
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...rest} style={{opacity: 0, fontSize: fontSize}} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
