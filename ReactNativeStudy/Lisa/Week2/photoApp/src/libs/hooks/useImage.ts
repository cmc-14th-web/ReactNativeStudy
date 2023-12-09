import ImagePicker from 'react-native-image-crop-picker';
import {Dimensions} from 'react-native';

import {imageStore} from 'libs/store/images';
import useNavigator from './useNavigator';
import {TabMenu} from 'constants/navigator/menu';

export const useImage = () => {
  const deviceWidth = Dimensions.get('screen').width;
  const pictureSize = deviceWidth / 3;

  const {setImages} = imageStore();
  const {tabNavigation} = useNavigator();

  const selectImagesFromGallery = async () => {
    const images = await ImagePicker.openPicker({
      width: pictureSize,
      height: pictureSize,
      multiple: true,
      cropping: true,
    });

    if (images.length) {
      const newImages = [];

      for (const image of images) {
        const croppedImage = await ImagePicker.openCropper({
          path: image.path,
          mediaType: 'photo',
        });

        const newImage = {
          date: (croppedImage.creationDate ??
            croppedImage.modificationDate) as string,
          width: croppedImage.width,
          height: croppedImage.height,
          path: croppedImage.path,
        };

        newImages.push(newImage);
      }

      setImages(newImages);
      tabNavigation.navigate(TabMenu.Home);
    }
  };

  const takePhotos = async () => {
    const image = await ImagePicker.openCamera({
      width: pictureSize,
      height: pictureSize,
      cropping: true,
    });

    if (image) {
      const newImage = [
        {
          date: (image.creationDate ?? image.modificationDate) as string,
          width: image.width,
          height: image.height,
          path: image.path,
        },
      ];

      setImages(newImage);
      tabNavigation.navigate(TabMenu.Home);
    }
  };

  return {selectImagesFromGallery, takePhotos};
};
