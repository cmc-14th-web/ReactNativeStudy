import {create} from 'zustand';
import {KeyofPalette} from '../utils/palette';

interface useColorStoreType {
  color: KeyofPalette;
}

const useColorStore = create<useColorStoreType>(set => ({
  color: 'Blue600',
  setColor: (newColor: KeyofPalette) =>
    set(() => ({
      color: newColor,
    })),
}));

export default useColorStore;
