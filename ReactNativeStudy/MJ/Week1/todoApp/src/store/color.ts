import {atom} from 'recoil';
import {KeyofPalette} from '../styles/palette';

const colorState = atom<KeyofPalette>({
  key: 'colorState',
  default: 'Orange',
});

export default colorState;
