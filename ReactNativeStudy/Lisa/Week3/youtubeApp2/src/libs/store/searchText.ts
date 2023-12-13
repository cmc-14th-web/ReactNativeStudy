import {create} from 'zustand';

import {SearchTextStoreType} from 'types/searchTextStore';

export const searchTextStore = create<SearchTextStoreType>(set => ({
  searchText: '',
  isSearchFinished: false,
  setSearchText: searchTextData => set({searchText: searchTextData}),
  setIsSearchFinished: isSearchFinishedData =>
    set({isSearchFinished: isSearchFinishedData}),
}));
