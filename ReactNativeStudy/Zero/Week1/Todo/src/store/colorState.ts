import {atom, useRecoilState} from 'recoil';

const colorState = atom({
  key: 'colorState',
  default: 'Orange',
});

export function useColor() {
  const [color, setColor] = useRecoilState(colorState);
  return {
    color,
    changeColor(color: string) {
      setColor(color);
    },
  };
}
