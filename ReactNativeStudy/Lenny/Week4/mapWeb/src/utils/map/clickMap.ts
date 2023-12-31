import { clickedLocationOptions } from "../../constants/icon";
import { ClickMapProps } from "../../types/map";

const clickMap = ({ favoriteMarkerLists, map, marker, setCurrentLatLng, setIsMarkerFixed, setShowFavoriteState, setAddFavoriteState }: ClickMapProps) => {
  naver.maps.Event.addListener(map, "click", (e) => {
    marker?.setPosition(e.coord);
    marker?.setIcon(clickedLocationOptions);
    favoriteMarkerLists.map((favoriteMarker) => favoriteMarker.setOptions({ position: favoriteMarker.getPosition(), visible: false }));
    setCurrentLatLng(e.coord);
    setIsMarkerFixed(true);
    setShowFavoriteState(false);
    setAddFavoriteState(false);
  });
};

export default clickMap;
