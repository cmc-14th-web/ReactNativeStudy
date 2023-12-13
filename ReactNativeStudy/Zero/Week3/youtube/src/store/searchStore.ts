import {create} from 'zustand';

export const useSearchStore = create(set => ({
  search: '',
  setSearch: (query: string) => set({search: query}),
  isSearched: false,
  setIsSearched: (isSearched: boolean) => set({isSearched}),
  deleteSearch: () => set({search: '', isSearched: false}),
}));
