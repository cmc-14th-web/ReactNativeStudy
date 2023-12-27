import {atom} from 'recoil';
import {BookMark} from '../../../types/bookmark';

const FavoritesState = 'favoriteLocationsState';
export const favoritesState = atom<BookMark[]>({
  key: FavoritesState,
  default: [],
});
