import {atom} from 'recoil';

const SearchTextStateKey = 'searchTextState';

const searchState = atom<string>({
  key: SearchTextStateKey,
  default: '',
});

export default searchState;
