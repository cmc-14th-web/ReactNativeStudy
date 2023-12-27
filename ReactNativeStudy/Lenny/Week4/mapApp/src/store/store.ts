import {create} from 'zustand';
import {FavoriteMarkerProps} from '../types/favorite';

interface StoreState {
  favoriteMarkerLists: FavoriteMarkerProps[];
}

interface StoreAction {
  setFavoriteMarkerLists: (favoriteMarkerLists: FavoriteMarkerProps[]) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  favoriteMarkerLists: [],
  setFavoriteMarkerLists: (state: FavoriteMarkerProps[]) =>
    set({favoriteMarkerLists: [...state]}),
}));
