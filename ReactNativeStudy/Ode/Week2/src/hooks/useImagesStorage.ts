import {useRecoilState} from 'recoil';
import {imagesState} from '../libraries/recoil/state/images';
import {Image} from '../types/image';

export default function useImagesStorage() {
  const [images, setImages] = useRecoilState(imagesState);

  const appendImage = (image: Image) => setImages([...images, image]);

  return {images, appendImage};
}
