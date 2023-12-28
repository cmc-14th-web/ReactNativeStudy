import {useRecoilState} from 'recoil';
import {bookmarksState} from '../states/bookmark';
import {BookMark, BookMarks} from '../../../types/bookmark';

export default function useBookmarkState() {
  const [bookmarks, setBookmarks] = useRecoilState(bookmarksState);

  const addBookmarks = (newBookmark: BookMark): BookMarks => {
    const newBookmarks = {
      ...bookmarks,
      [new Date().toString()]: newBookmark,
    };
    setBookmarks(newBookmarks);
    return newBookmarks;
  };

  return {
    bookmarks,
    addBookmarks,
  };
}
