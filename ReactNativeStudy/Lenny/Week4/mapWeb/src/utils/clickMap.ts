import { clickedLocationOptions } from "../constants/icon";

interface ClickMapProps {
  favoriteMarkers: naver.maps.Marker[];
  map: naver.maps.Map;
  marker: naver.maps.Marker | undefined;
  setReverseLocation: React.Dispatch<React.SetStateAction<naver.maps.LatLng>>;
  setIsMarkerFixed: React.Dispatch<React.SetStateAction<boolean>>;
  setActivatedFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAddFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}

const clickMap = ({ favoriteMarkers, map, marker, setReverseLocation, setIsMarkerFixed, setActivatedFavorite, setIsAddFavorite }: ClickMapProps) => {
  naver.maps.Event.addListener(map, "click", (e) => {
    marker?.setPosition(e.coord);
    marker?.setIcon(clickedLocationOptions);
    favoriteMarkers.map((favoriteMarker) => favoriteMarker.setOptions({ position: favoriteMarker.getPosition(), visible: false }));
    setReverseLocation(e.coord);
    setIsMarkerFixed(true);
    setActivatedFavorite(false);
    setIsAddFavorite(false);
  });
};

export default clickMap;
