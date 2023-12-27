import {create} from 'zustand';

interface favoriteMarkersProps {
  latitude: number;
  longitude: number;
  address: string;
}

interface StoreState {
  favoriteMarkers: favoriteMarkersProps[];
}

interface StoreAction {
  setFavoriteMarkers: (favoriteMarkers: favoriteMarkersProps[]) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  favoriteMarkers: [],
  setFavoriteMarkers: (state: favoriteMarkersProps[]) =>
    set({favoriteMarkers: [...state]}),
}));
