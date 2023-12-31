import {atom} from 'recoil';
import {BookMarks} from '../../../types/bookmark';

const BookmarksState = 'BookmarkObjectState';

export const bookmarksState = atom<BookMarks>({
  key: BookmarksState,
  default: {},
});
