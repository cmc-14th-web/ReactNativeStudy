import { myLocationOptions } from "../constants/icon";

interface SetMapCenterProps {
  map: naver.maps.Map | undefined;
  marker: naver.maps.Marker | undefined;
  centerLocation: naver.maps.LatLng;
  setIsMarkerFixed: React.Dispatch<React.SetStateAction<boolean>>;
}

const setMapCenter = ({ map, marker, centerLocation, setIsMarkerFixed }: SetMapCenterProps) => {
  map?.setCenter(centerLocation);
  marker?.setPosition(centerLocation);
  marker?.setIcon(myLocationOptions);
  setIsMarkerFixed(false);
};

export default setMapCenter;
