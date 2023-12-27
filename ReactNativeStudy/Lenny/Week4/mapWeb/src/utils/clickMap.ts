import { clickedLocationOptions } from "../constants/icon";

interface ClickMapProps {
  map: naver.maps.Map;
  marker: naver.maps.Marker | undefined;
  setReverseLocation: React.Dispatch<React.SetStateAction<naver.maps.LatLng>>;
  setIsMarkerFixed: React.Dispatch<React.SetStateAction<boolean>>;
  setActivatedFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAddFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}

const clickMap = ({ map, marker, setReverseLocation, setIsMarkerFixed, setActivatedFavorite, setIsAddFavorite }: ClickMapProps) => {
  naver.maps.Event.addListener(map, "click", (e) => {
    marker?.setPosition(e.coord);
    marker?.setIcon(clickedLocationOptions);
    setReverseLocation(e.coord);
    setIsMarkerFixed(true);
    setActivatedFavorite(false);
    setIsAddFavorite(false);
  });
};

export default clickMap;
