import {atom} from 'recoil';

export const doneListState = atom<string[]>({
  key: 'doneListState',
  default: [],
});
