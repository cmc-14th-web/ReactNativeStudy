import { FavoriteMarkersProps } from "../store/store";

interface RemoveFavoriteProps {
  favoriteMarkerLists: FavoriteMarkersProps[];
  favoriteMarkers: naver.maps.Marker[];
}

const removeFavorite = ({ favoriteMarkerLists, favoriteMarkers }: RemoveFavoriteProps) => {
  favoriteMarkerLists.pop();
  favoriteMarkers.pop();
};

export default removeFavorite;
