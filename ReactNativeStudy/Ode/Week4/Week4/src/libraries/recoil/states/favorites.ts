import {atom} from 'recoil';
import {MapData} from '../../../screens/HomeScreen';

const FavoritesState = 'favoriteLocationsState';
export const favoritesState = atom<MapData[]>({
  key: FavoritesState,
  default: [],
});
