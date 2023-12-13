import {create} from 'zustand';
import {Search} from '../type/search';

export const useSearchStore = create<Search>(set => ({
  search: '',
  setSearch: (query: string) => set({search: query}),
  isSearched: false,
  setIsSearched: (isSearched: boolean) => set({isSearched}),
  deleteSearch: () => set({search: '', isSearched: false}),
}));
