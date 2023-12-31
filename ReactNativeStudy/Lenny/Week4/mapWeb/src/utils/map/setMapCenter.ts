import { currentLocationOptions } from "../../constants/icon";
import { SetMapCenterProps } from "../../types/map";

const setMapCenter = ({ map, marker, center, setIsMarkerFixed }: SetMapCenterProps) => {
  map?.setCenter(center);
  marker?.setPosition(center);
  marker?.setIcon(currentLocationOptions);
  setIsMarkerFixed(false);
};

export default setMapCenter;
