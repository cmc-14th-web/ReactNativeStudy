import {create} from 'zustand';
import {SelectedImageDataType} from '../types/ImageType';

interface StoreState {
  images: SelectedImageDataType[];
  savedDate: string;
}

interface StoreAction {
  setImages: (todo: SelectedImageDataType[]) => void;
  setSavedDate: (savedDate: string) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  images: [],
  savedDate: '',
  setImages: (state: SelectedImageDataType[]) => set({images: [...state]}),
  setSavedDate: (state: string) => set({savedDate: state}),
}));
