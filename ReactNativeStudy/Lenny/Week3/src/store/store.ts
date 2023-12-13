import {create} from 'zustand';

interface StoreState {
  searchResults: any;
  searchContent: string;
}

interface StoreAction {
  setSearchResults: (searchResults: any) => void;
  setSearchContent: (searchContent: string) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  searchResults: [],
  searchContent: '',
  setSearchResults: (state: any) => set({searchResults: [...state]}),
  setSearchContent: (state: string) => set({searchContent: state}),
}));
