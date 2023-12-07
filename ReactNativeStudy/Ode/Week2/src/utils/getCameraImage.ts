import {SCREEN_WIDTH} from '@gorhom/bottom-sheet';
import {Alert} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

export default async function getCameraImage() {
  try {
    const photo = await ImageCropPicker.openCamera({
      width: SCREEN_WIDTH,
      height: SCREEN_WIDTH,
      cropping: true,
    });
    return photo;
  } catch (error) {
    console.error(error);
    Alert.alert(
      'Error',
      'An error occurred while taking or cropping the image.',
    );
  }
}
