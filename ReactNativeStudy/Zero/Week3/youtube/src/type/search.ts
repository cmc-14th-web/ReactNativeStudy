export type Search = {
  search: string;
  setSearch: (query: string) => void;
  isSearched: boolean;
  setIsSearched: (isSearched: boolean) => void;
  deleteSearch: () => void;
};
