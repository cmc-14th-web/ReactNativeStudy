import { favoriteMarkerOptions } from "../constants/icon";
import { AddFavoriteProps } from "../types/favorite";

const addFavorite = ({ favoriteMarkerInformationLists, map, currentLatLng, favoriteMarkerLists, setFavoriteMarkerLists }: AddFavoriteProps) => {
  // 좌표 -> 도로명 주소 변환 코드
  naver.maps.Service.reverseGeocode(
    { coords: currentLatLng, orders: [naver.maps.Service.OrderType.ADDR, naver.maps.Service.OrderType.ROAD_ADDR].join(",") },
    (status, response) => {
      favoriteMarkerInformationLists.push({ latitude: currentLatLng.y, longitude: currentLatLng.x, address: response.v2.address.roadAddress });
      setFavoriteMarkerLists([
        ...favoriteMarkerLists,
        new naver.maps.Marker({
          position: new naver.maps.LatLng(currentLatLng.y, currentLatLng.x),
          map: map,
          icon: favoriteMarkerOptions,
          visible: false,
        }),
      ]);
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: "addData", favoriteMarkerInformationLists: favoriteMarkerInformationLists }));
    }
  );
};

export default addFavorite;
