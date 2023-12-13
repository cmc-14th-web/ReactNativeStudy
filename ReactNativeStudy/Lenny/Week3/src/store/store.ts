import {create} from 'zustand';

interface StoreState {
  nextPageToken: string;
  searchResults: any;
  searchContent: string;
}

interface StoreAction {
  setNextPageToken: (nextPageToken: string) => void;
  setSearchResults: (searchResults: any) => void;
  setSearchContent: (searchContent: string) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  nextPageToken: '',
  searchResults: [],
  searchContent: '',
  setNextPageToken: (state: string) => set({nextPageToken: state}),
  setSearchResults: (state: any) => set({searchResults: [...state]}),
  setSearchContent: (state: string) => set({searchContent: state}),
}));
