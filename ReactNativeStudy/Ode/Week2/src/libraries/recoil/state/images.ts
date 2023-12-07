import {atom} from 'recoil';
import {Image} from '../../../types/image';

const ImagesStateKey = 'images';

export const imagesState = atom<Image[]>({
  key: ImagesStateKey,
  default: [],
});
