import {create} from 'zustand';
import {SelectedImageDataType} from '../types/ImageType';
import {gradientColors} from '../styles/colors';
import {ThemeColorType} from '../types/ThemeColorType';

interface StoreState {
  images: SelectedImageDataType[];
  savedDate: string;
  currentColor: ThemeColorType;
}

interface StoreAction {
  setImages: (todo: SelectedImageDataType[]) => void;
  setSavedDate: (savedDate: string) => void;
  setCurrentColor: (currentColor: ThemeColorType) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  images: [],
  savedDate: '',
  currentColor: {
    color: 'purple',
    start: gradientColors.purpleStart,
    end: gradientColors.purpleEnd,
  },
  setImages: (state: SelectedImageDataType[]) => set({images: [...state]}),
  setSavedDate: (state: string) => set({savedDate: state}),
  setCurrentColor: (state: ThemeColorType) => set({currentColor: state}),
}));
