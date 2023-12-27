import {useRecoilState} from 'recoil';
import {favoritesState} from '../states/favorites';
import {BookMark} from '../../../types/bookmark';

export default function useFavoritesState() {
  const [favorites, setFavorites] = useRecoilState(favoritesState);

  const addFavorites = (newFavorite: BookMark) =>
    setFavorites([...favorites, newFavorite]);
  return {
    favorites,
    addFavorites,
  };
}
