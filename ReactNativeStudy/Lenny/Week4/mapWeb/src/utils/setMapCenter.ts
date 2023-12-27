import { myLocationOptions } from "../constants/icon";
import { SetMapCenterProps } from "../types/map";

const setMapCenter = ({ map, marker, centerLocation, setIsMarkerFixed }: SetMapCenterProps) => {
  map?.setCenter(centerLocation);
  marker?.setPosition(centerLocation);
  marker?.setIcon(myLocationOptions);
  setIsMarkerFixed(false);
};

export default setMapCenter;
