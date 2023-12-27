import {atom} from 'recoil';
import {BookMark} from '../../../types/bookmark';

const BookmarksState = 'BookmarksState';

export const bookmarksState = atom<BookMark[]>({
  key: BookmarksState,
  default: [],
});
