import {create} from 'zustand';

export type imageType = {
  mime: string;
  modificationDate: string | undefined;
  path: string | undefined;
};

type StoreStates = {
  isClosed: boolean;
  images: imageType[];
  curImageInfo: imageType | null;
  isHome: boolean;

  setIsClosed: (value: boolean) => void;
  addImage: (value: imageType) => void;
  setCurImageInfo: (value: imageType) => void;
  setIsHome: (value: boolean) => void;
};

const useStore = create<StoreStates>(set => ({
  isClosed: true,
  images: [],
  curImageInfo: null,
  isHome: true,

  setIsClosed: (value: boolean) => set({isClosed: value}),
  addImage: (value: imageType) =>
    set(state => ({images: [...state.images, value]})),
  setCurImageInfo: (value: imageType) => set({curImageInfo: value}),
  setIsHome: (value: boolean) => set({isHome: value}),
}));

export default useStore;
