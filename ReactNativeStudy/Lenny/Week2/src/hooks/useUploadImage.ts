import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {ImageDataType, SelectedImageDataType} from '../types/ImageType';
import {useStore} from '../store/store';
import {deviceWidth} from '../constants/device';
import {Alert} from 'react-native';
import {useRef} from 'react';

export const useUploadImage = () => {
  const {images, setImages} = useStore();
  const currentImages = useRef<SelectedImageDataType[]>([]);
  let selectedImagesCount = 1;

  // 카메라로 촬영하기
  const uploadByCamera = () => {
    ImagePicker.openCamera({
      width: (deviceWidth - 32) / 3,
      height: (deviceWidth - 32) / 3,
      cropping: true,
    })
      .then((result: ImageOrVideo) => {
        setImages([
          ...images,
          {
            creationDate: new Date(),
            path: result.path,
            height: result.height,
            width: result.width,
          },
        ]);
        console.log('성공', result);
      })
      .catch(e => {
        Alert.alert('카메라를 열 수 없습니다.');
        console.log(e);
      });
  };

  // 갤러리에서 선택하기
  const openEdit = async (selectedImages: ImageOrVideo[] | ImageDataType[]) => {
    const selectedImagesLength = selectedImages.length;
    // 1개씩 순서대로 자르기 위해 async await와 재귀함수 사용
    await ImagePicker.openCropper({
      path: selectedImages[selectedImagesLength - selectedImagesCount].path,
      mediaType: 'photo',
      width: (deviceWidth - 32) / 3,
      height: (deviceWidth - 32) / 3,
    })
      .then(async image => {
        selectedImagesCount++;
        currentImages.current = [
          ...currentImages.current,
          {
            creationDate: new Date(),
            path: image.path,
            height: image.height,
            width: image.width,
          },
        ];

        if (selectedImagesCount <= selectedImagesLength) {
          await openEdit(selectedImages);
        }
      })
      .catch(err => console.log(err));
  };

  const uploadByGallery = () => {
    // 다수 선택 모드로 갤러리 열기
    ImagePicker.openPicker({
      multiple: true,
    })
      .then(async (selectedImages: ImageOrVideo[] | ImageDataType[]) => {
        // 자르기 모드로 진입
        await openEdit(selectedImages);
        setImages(currentImages.current);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return {uploadByCamera, uploadByGallery} as const; // 객체를 반환
};
