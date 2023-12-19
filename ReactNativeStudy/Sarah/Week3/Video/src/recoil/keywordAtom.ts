import {atom} from 'recoil';

export const keywordState = atom({
  key: 'keywordState',
  default: '',
});

export const hasSearchState = atom({
  key: 'hasSearchState',
  default: false,
});
