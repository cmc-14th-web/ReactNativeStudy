import {ImageOrVideo} from 'react-native-image-crop-picker';
import {atom} from 'recoil';

const detailImageState = atom<ImageOrVideo | null>({
  key: 'detailImageState',
  default: null,
});

export default detailImageState;
