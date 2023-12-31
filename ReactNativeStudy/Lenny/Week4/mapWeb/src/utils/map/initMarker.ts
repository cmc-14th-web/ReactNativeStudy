import { currentLocationOptions } from "../../constants/icon";
import { InitMarkerProps } from "../../types/map";

const initMarker = ({ center, map, setMarker }: InitMarkerProps) => {
  const marker = new naver.maps.Marker({
    position: center,
    map: map,
    icon: currentLocationOptions,
  });

  setMarker(marker);

  return marker;
};

export default initMarker;
