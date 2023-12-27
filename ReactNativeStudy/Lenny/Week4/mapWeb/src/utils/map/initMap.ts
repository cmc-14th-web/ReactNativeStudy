import { InitMapProps, InitMapReturnProps } from "../../types/map";

const initMap = ({ latitude, longitude, setMap, setCenter }: InitMapProps) => {
  const center: naver.maps.LatLng = new naver.maps.LatLng(latitude, longitude);
  const map: naver.maps.Map = new naver.maps.Map("map", {
    center: center,
    zoom: 16,
  });

  setMap(map);
  setCenter(center);

  const data: InitMapReturnProps = {
    map: map,
    center: center,
  };

  return data;
};

export default initMap;
