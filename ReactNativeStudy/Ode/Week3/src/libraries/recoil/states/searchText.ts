import {atom} from 'recoil';

const SearchTextStateKey = 'searchText';

const searchState = atom<string>({
  key: SearchTextStateKey,
  default: '',
});

export default searchState;
