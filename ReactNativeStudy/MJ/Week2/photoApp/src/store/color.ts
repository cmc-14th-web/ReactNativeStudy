import {atom} from 'recoil';
import {KeyofPalette} from '../styles/palette';

const colorState = atom<KeyofPalette>({
  key: 'colorState',
  default: 'Gray900',
});

export default colorState;
