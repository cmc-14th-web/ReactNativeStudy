import {useRecoilState} from 'recoil';
import {bookmarksState} from '../states/bookmark';
import {BookMark} from '../../../types/bookmark';

export default function useBookmarkState() {
  const [bookmarks, setBookmarks] = useRecoilState(bookmarksState);

  const addBookmarks = (newBookmark: BookMark) => {
    setBookmarks(prev => ({
      ...prev,
      [newBookmark.id]: newBookmark,
    }));
  };

  return {
    bookmarks,
    addBookmarks,
  };
}
