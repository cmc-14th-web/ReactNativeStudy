import {KeyOfPalette} from 'styles';
import {atom} from 'recoil';

type ColorStateType = {
  color: KeyOfPalette;
};

const initialState: ColorStateType = {
  color: 'orange',
};

export const colorState = atom<ColorStateType>({
  key: 'colorState',
  default: initialState,
});
