import {create} from 'zustand';
import {ImageStateType} from 'types/image';

export const imageStore = create<ImageStateType>(set => ({
  images: [],
  setImages: newImage =>
    set(prevState => ({images: [...prevState.images, newImage]})),
}));
