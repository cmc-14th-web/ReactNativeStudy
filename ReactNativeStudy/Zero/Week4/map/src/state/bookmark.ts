import {atom} from 'recoil';
import {Bookmark} from '../type/bookmark';

export const bookmarkState = atom({
  key: 'bookmarkState',
  default: [] as Bookmark[],
});
