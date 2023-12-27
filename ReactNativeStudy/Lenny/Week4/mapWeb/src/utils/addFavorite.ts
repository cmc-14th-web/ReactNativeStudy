import { favoriteMarkerOptions } from "../constants/icon";
import { FavoriteMarkersProps } from "../store/store";

interface AddFavoriteProps {
  favoriteMarkerLists: FavoriteMarkersProps[];
  map: naver.maps.Map | undefined;
  reverseLocation: naver.maps.LatLng;
  favoriteMarkers: naver.maps.Marker[];
  setFavoriteMarkers: React.Dispatch<React.SetStateAction<naver.maps.Marker[]>>;
}

const addFavorite = ({ favoriteMarkerLists, map, reverseLocation, favoriteMarkers, setFavoriteMarkers }: AddFavoriteProps) => {
  // 좌표 -> 도로명 주소 변환 코드
  naver.maps.Service.reverseGeocode(
    { coords: reverseLocation, orders: [naver.maps.Service.OrderType.ADDR, naver.maps.Service.OrderType.ROAD_ADDR].join(",") },
    (status, response) => {
      favoriteMarkerLists.push({ latitude: reverseLocation.y, longitude: reverseLocation.x, address: response.v2.address.roadAddress });
      setFavoriteMarkers([
        ...favoriteMarkers,
        new naver.maps.Marker({
          position: new naver.maps.LatLng(reverseLocation.y, reverseLocation.x),
          map: map,
          icon: favoriteMarkerOptions,
          visible: false,
        }),
      ]);
    }
  );
};

export default addFavorite;
