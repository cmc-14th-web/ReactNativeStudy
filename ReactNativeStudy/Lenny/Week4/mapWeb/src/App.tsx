import { useEffect, useState } from "react";
import "./App.css";
import { myLocationOptions } from "./constants/icon";
import { useStore } from "./store/store";
import addFavorite from "./utils/addFavorite";
import { showFavorite } from "./utils/showFavorite";
import removeFavorite from "./utils/removeFavorite";
import clickMap from "./utils/clickMap";
import setMapCenter from "./utils/setMapCenter";
import { CoordinationProps } from "./types/map";

export default function App() {
  const [map, setMap] = useState<naver.maps.Map>();
  const [marker, setMarker] = useState<naver.maps.Marker>();
  const [centerLocation, setCenterLocation] = useState<naver.maps.LatLng>(new naver.maps.LatLng(37.3595704, 127.105399));
  const [currentLatLng, setCurrentLatLng] = useState<naver.maps.LatLng>(new naver.maps.LatLng(37.3595704, 127.105399));
  const [showFavoriteState, setShowFavoriteState] = useState<boolean>(false);
  const [isMarkerFixed, setIsMarkerFixed] = useState<boolean>(false);
  const [addFavoriteState, setAddFavoriteState] = useState<boolean>(false);
  const [favoriteMarkerLists, setFavoriteMarkerLists] = useState<naver.maps.Marker[]>([]);

  const [topInset, setTopInset] = useState<number>(0);

  const { favoriteMarkerInformationLists } = useStore();

  const favoriteButtonState = `${showFavoriteState ? "activated" : "deactivated"}-favorite`;

  const initMap = (latitude: number, longitude: number) => {
    const center: naver.maps.LatLng = new naver.maps.LatLng(latitude, longitude);
    const naverMap: naver.maps.Map = new naver.maps.Map("map", {
      center: center,
      zoom: 16,
    });

    const myLocationMarker = new naver.maps.Marker({
      position: center,
      map: naverMap,
      icon: myLocationOptions,
    });

    setMap(naverMap);
    setMarker(myLocationMarker);
    setCenterLocation(center);

    naverMap;
    myLocationMarker;
  };

  useEffect(() => {
    if (map) {
      clickMap({ favoriteMarkerLists, map, marker, setCurrentLatLng, setIsMarkerFixed, setShowFavoriteState, setAddFavoriteState });
    }
  }, [map, marker, favoriteMarkerLists]);

  // web으로 확인할 때 사용
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (e) => initMap(e.coords.latitude, e.coords.longitude),
  //     (err) => console.log(err)
  //   );
  // }, []);

  useEffect(() => {
    // react-native와 통신할 때 사용
    if (window.ReactNativeWebView) {
      window.addEventListener("message", (e) => {
        const response: CoordinationProps = JSON.parse(e.data);
        if (response.type === "initialRequest") {
          const { latitude: currentLatitude, longitude: currentLongitude } = response.coords;
          initMap(currentLatitude, currentLongitude);
          setTopInset(response.topInset);
          window.ReactNativeWebView.postMessage(JSON.stringify({ type: "init", loading: false }));
        }
      });
      window.removeEventListener("message", (e) => console.log(e));
    }
  }, []);

  const handleSetMapCetner = () => {
    setMapCenter({ map, marker, centerLocation, setIsMarkerFixed });
  };

  const handleShowFavorite = () => {
    showFavorite({ showFavoriteState, setShowFavoriteState, favoriteMarkerLists });
  };

  const handleAddFavorite = () => {
    setAddFavoriteState(!addFavoriteState);

    // 추가할 때
    if (!addFavoriteState) {
      addFavorite({ favoriteMarkerInformationLists, map, currentLatLng, favoriteMarkerLists, setFavoriteMarkerLists });
    }

    // 제거할 때
    if (addFavoriteState) {
      removeFavorite({ favoriteMarkerInformationLists, favoriteMarkerLists });
    }
  };

  return (
    <div id="map">
      {!isMarkerFixed && (
        <button className={`${favoriteButtonState}-button`} style={{ top: `${topInset + 15}px` }} onClick={handleShowFavorite}>
          <img className="favorite-img" src={`../assets/${favoriteButtonState}.svg`} alt="즐겨찾기 지도에 표시 버튼" />
          즐겨찾기
        </button>
      )}
      {isMarkerFixed && (
        <button className="add-favorite-button" style={{ top: topInset }} onClick={handleAddFavorite}>
          <img src={`../assets/${addFavoriteState ? "after" : "before"}-add-favorite.svg`} alt="즐겨찾기 추가 여부 버튼" />
        </button>
      )}
      <button className="current-location-button" onClick={handleSetMapCetner}>
        <img src="../assets/my-location.svg" alt="내 위치" />
      </button>
    </div>
  );
}
