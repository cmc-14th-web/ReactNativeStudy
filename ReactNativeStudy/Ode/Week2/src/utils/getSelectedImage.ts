import {SCREEN_WIDTH} from '@gorhom/bottom-sheet';
import ImageCropPicker from 'react-native-image-crop-picker';
import getFormattedDate from './getFormattedDate';
import {Image} from '../types/image';
import {Alert} from 'react-native';

export default async function getSelectedImage(): Promise<Image | undefined> {
  try {
    const selectedImage = await ImageCropPicker.openPicker({
      width: SCREEN_WIDTH,
      height: SCREEN_WIDTH,
      cropping: true,
    });

    if (!selectedImage) {
      return undefined;
    }

    const croppedImage = await ImageCropPicker.openCropper({
      path: selectedImage.path,
      mediaType: 'photo',
    });

    if (!croppedImage) {
      return undefined;
    }

    const {width, height, path, modificationDate} = croppedImage;
    return {
      width,
      height,
      path,
      creationDate: getFormattedDate(modificationDate),
    };
  } catch (error) {
    console.error(error);
    Alert.alert(
      'Error',
      'An error occurred while taking or cropping the image.',
    );
  }
}
