import {create} from 'zustand';

import {ImageStateType, ImageType} from 'types/image';

export const imageStore = create<ImageStateType>(set => ({
  images: [],
  setImages: (newImages: ImageType[]) =>
    set(prevState => ({images: [...prevState.images, ...newImages]})),
}));
