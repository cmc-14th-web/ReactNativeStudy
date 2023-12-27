import {useRecoilState} from 'recoil';
import {favoritesState} from '../states/favorites';
import {MapData} from '../../../screens/HomeScreen';

export default function useFavoritesState() {
  const [favorites, setFavorites] = useRecoilState(favoritesState);

  const addFavorites = (newFavorite: MapData) =>
    setFavorites([...favorites, newFavorite]);
  return {
    favorites,
    addFavorites,
  };
}
