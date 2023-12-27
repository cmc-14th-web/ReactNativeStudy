import {create} from 'zustand';

type MapStore = {
  favoriteLocationList: string[];
  setFavoriteLocationList: (newFavoriteLocation: string) => void;
};

export const mapStore = create<MapStore>(set => ({
  favoriteLocationList: [],
  setFavoriteLocationList: newFavoriteLocation =>
    set(state => ({
      favoriteLocationList: [
        ...state.favoriteLocationList,
        newFavoriteLocation,
      ],
    })),
}));
