import {create} from 'zustand';

interface StoreState {
  nextPageToken: string;
  searchResults: any;
}

interface StoreAction {
  setNextPageToken: (nextPageToken: string) => void;
  setSearchResults: (searchResults: any) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  nextPageToken: '',
  searchResults: [],
  setNextPageToken: (state: string) => set({nextPageToken: state}),
  setSearchResults: (state: any) => set({searchResults: [...state]}),
}));
