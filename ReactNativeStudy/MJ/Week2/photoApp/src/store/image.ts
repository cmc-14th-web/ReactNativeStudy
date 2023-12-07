import {ImageOrVideo} from 'react-native-image-crop-picker';
import {atom} from 'recoil';

const imageListState = atom<ImageOrVideo[]>({
  key: 'imageList',
  default: [],
});

export default imageListState;
