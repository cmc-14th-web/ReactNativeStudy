import {atom} from 'recoil';

export const pictureState = atom<string[]>({
  key: 'pictures',
  default: [],
});
