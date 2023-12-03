import {atom, useRecoilState} from 'recoil';

import {theme} from '../constants';

const colorState = atom({
  key: 'colorState',
  default: 'Orange',
});

export function useColor() {
  const [color, setColor] = useRecoilState(colorState);
  const themeColor = theme.color;
  return {
    color,
    changeColor(color: string) {
      setColor(color);
    },
    getColorCode() {
      return themeColor[color as keyof typeof themeColor];
    },
  };
}
