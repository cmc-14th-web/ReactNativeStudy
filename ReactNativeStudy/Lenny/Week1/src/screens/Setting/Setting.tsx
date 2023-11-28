import React from 'react';
import colors from '../../styles/color';
import {useStore} from '../../store/store';

import * as Style from '../../styles/Setting/Setting.style';

export default function Setting() {
  const themeColors: string[] = [
    colors.orange,
    colors.green,
    colors.blue,
    colors.purple,
    colors.pink,
  ];
  const {setColor} = useStore();
  return (
    <Style.Container>
      <Style.Text>색상을 선택해주세요.</Style.Text>
      <Style.Wrap>
        {themeColors.map((themeColor: string) => (
          <Style.SelectColor
            onPress={() => setColor(themeColor)}
            activeOpacity={0.5}
            key={`color-${themeColor}`}
            themeColor={themeColor}
          />
        ))}
      </Style.Wrap>
    </Style.Container>
  );
}
