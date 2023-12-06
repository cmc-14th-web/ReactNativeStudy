import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {Dimensions} from 'react-native';

import {imageStore} from 'libs/store/images';
import useNavigator from './useNavigator';
import {TabMenu} from 'constants/navigator/menu';

export const useImage = () => {
  const deviceWidth = Dimensions.get('screen').width;
  const pictureSize = deviceWidth / 3;

  const {setImages} = imageStore();
  const {tabNavigation} = useNavigator();

  const selectPhotosFromGallery = () => {
    ImagePicker.openPicker({
      width: pictureSize,
      height: pictureSize,
      multiple: true,
      cropping: true,
    }).then(images => {
      images.length &&
        images.map((image: ImageOrVideo) => {
          setImages({
            date: (image.creationDate ?? image.modificationDate) as string,
            width: image.width,
            height: image.height,
            path: image.path,
          });
        });
      tabNavigation.navigate(TabMenu.Home);
    });
  };

  return {selectPhotosFromGallery};
};
