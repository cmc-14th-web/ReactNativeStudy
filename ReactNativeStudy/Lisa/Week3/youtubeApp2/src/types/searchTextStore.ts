export type SearchTextStoreType = {
  searchText: string;
  isSearchFinished: boolean;
  setSearchText: (searchTextData: string) => void;
  setIsSearchFinished: (isSearchFinishedData: boolean) => void;
};
