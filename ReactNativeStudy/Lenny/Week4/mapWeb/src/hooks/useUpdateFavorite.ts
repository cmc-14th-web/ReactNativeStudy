import { favoriteMarkerOptions } from "../constants/icon";
import { useStore } from "../store/store";
import { AddFavoriteProps, RemoveFavoriteProps } from "../types/favorite";

const useAddFavorite = () => {
  const { favoriteMarkerInformationLists } = useStore();

  const addFavorite = ({ map, currentLatLng, favoriteMarkerLists, setFavoriteMarkerLists }: AddFavoriteProps) => {
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
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: "updateData", favoriteMarkerInformationLists: favoriteMarkerInformationLists }));
      }
    );
  };

  const removeFavorite = ({ favoriteMarkerLists }: RemoveFavoriteProps) => {
    favoriteMarkerInformationLists.pop();
    favoriteMarkerLists.pop();
    window.ReactNativeWebView.postMessage(JSON.stringify({ type: "updateData", favoriteMarkerInformationLists: favoriteMarkerInformationLists }));
  };

  return { addFavorite, removeFavorite };
};

export default useAddFavorite;
