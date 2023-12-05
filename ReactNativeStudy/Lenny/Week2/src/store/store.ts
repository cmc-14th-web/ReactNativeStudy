import {create} from 'zustand';
import {ImageType} from '../types/ImageType';

interface StoreState {
  images: ImageType[];
}

interface StoreAction {
  setImages: (todo: ImageType[]) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  images: [],
  setImages: (state: ImageType[]) => set({images: [...state]}),
}));
