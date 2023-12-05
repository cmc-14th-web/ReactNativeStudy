import {create} from 'zustand';
import {ImageDataType} from '../types/ImageType';

interface StoreState {
  images: ImageDataType[];
  savedDate: string;
}

interface StoreAction {
  setImages: (todo: ImageDataType[]) => void;
  setSavedDate: (savedDate: string) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  images: [],
  savedDate: '',
  setImages: (state: ImageDataType[]) => set({images: [...state]}),
  setSavedDate: (state: string) => set({savedDate: state}),
}));
