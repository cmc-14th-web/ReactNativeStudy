import {SCREEN_WIDTH} from '@gorhom/bottom-sheet';
import {Alert} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import getFormattedDate from './getFormattedDate';
import {Image} from '../types/image';

export default async function getCameraImage(): Promise<Image | undefined> {
  try {
    const photo = await ImageCropPicker.openCamera({
      width: SCREEN_WIDTH,
      height: SCREEN_WIDTH,
      cropping: true,
    });

    const {width, height, path, creationDate} = photo;

    return {
      width,
      height,
      path,
      creationDate: getFormattedDate(creationDate),
    };
  } catch (error) {
    console.error(error);
    Alert.alert(
      'Error',
      'An error occurred while taking or cropping the image.',
    );
  }
}
