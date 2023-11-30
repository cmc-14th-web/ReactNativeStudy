import {atom} from 'recoil';
import {ColorType} from '../../../types/color';

// 테마 색 저장
export const colorState = atom<ColorType>({
  key: 'colorState',
  default: 'orange',
});
