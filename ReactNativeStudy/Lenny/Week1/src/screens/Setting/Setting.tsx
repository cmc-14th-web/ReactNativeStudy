import React from 'react';
import colors from '../../styles/color';
import {useStore} from '../../store/store';

import * as Style from '../../styles/Setting/Setting.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeProp {
  themeColor: string;
}

export default function Setting() {
  const themeColors: string[] = [
    colors.orange,
    colors.green,
    colors.blue,
    colors.purple,
    colors.pink,
  ];
  const {setColor} = useStore();

  const setThemeColor = async (props: ThemeProp) => {
    try {
      await AsyncStorage.setItem('color', props.themeColor);
    } catch (err) {
      console.log(err);
    }

    setColor(props.themeColor);
  };

  return (
    <Style.Container>
      <Style.Text>색상을 선택해주세요.</Style.Text>
      <Style.Wrap>
        {themeColors.map((themeColor: string) => (
          <Style.SelectColor
            onPress={() => setThemeColor({themeColor: themeColor})}
            activeOpacity={0.5}
            key={`color-${themeColor}`}
            themeColor={themeColor}
          />
        ))}
      </Style.Wrap>
    </Style.Container>
  );
}
