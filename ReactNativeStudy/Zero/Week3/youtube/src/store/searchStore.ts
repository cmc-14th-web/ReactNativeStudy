import {create} from 'zustand';
import {Search} from '../type/search';

export const useSearchStore = create<Search>(set => ({
  search: '',
  setSearch: query => set({search: query}),
  isSearched: false,
  setIsSearched: isSearched => set({isSearched}),
  deleteSearch: () => set({search: '', isSearched: false}),
}));
