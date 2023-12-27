import { create } from "zustand";

export interface FavoriteMarkersProps {
  latitude: number;
  longitude: number;
  address: string;
}

interface StoreState {
  favoriteMarkerLists: FavoriteMarkersProps[];
}

interface StoreAction {
  setFavoriteMarkerLists: (favoriteMarkerLists: FavoriteMarkersProps[]) => void;
}

export const useStore = create<StoreState & StoreAction>((set) => ({
  favoriteMarkerLists: [],
  setFavoriteMarkerLists: (state: FavoriteMarkersProps[]) => set({ favoriteMarkerLists: [...state] }),
}));
