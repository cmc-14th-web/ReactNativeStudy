import {Dimensions} from 'react-native';

const screen = Dimensions.get('screen');

const screenInfo = {
  width: screen.width,
  height: screen.height,
};

export default screenInfo;
