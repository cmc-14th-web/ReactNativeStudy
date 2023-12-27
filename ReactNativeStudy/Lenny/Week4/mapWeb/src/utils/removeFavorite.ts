import { FavoriteMarkersProps } from "../store/store";

interface RemoveFavoriteProps {
  favoriteMarkerLists: FavoriteMarkersProps[];
  favoriteMarkers: naver.maps.Marker[];
}

const removeFavorite = ({ favoriteMarkerLists, favoriteMarkers }: RemoveFavoriteProps) => {
  favoriteMarkerLists.pop();
  favoriteMarkers.pop();
  window.ReactNativeWebView.postMessage(JSON.stringify({ type: "removeData", favoriteMarkerLists: favoriteMarkerLists }));
};

export default removeFavorite;
