import { create } from "zustand";
import { favoriteMarkerInformationListsProps } from "../types/favorite";

interface StoreState {
  favoriteMarkerInformationLists: favoriteMarkerInformationListsProps[];
}

interface StoreAction {}

export const useStore = create<StoreState & StoreAction>((set) => ({
  favoriteMarkerInformationLists: [],
}));
