import { useEffect, useState } from "react";
import "./App.css";
import { showFavorite } from "./utils/favorite/showFavorite";
import clickMap from "./utils/map/clickMap";
import setMapCenter from "./utils/map/setMapCenter";
import { CoordinationProps } from "./types/map";
import useAddFavorite from "./hooks/useUpdateFavorite";
import initialRequest from "./utils/request/initialRequest";
import dragMap from "./utils/map/dragMap";

export default function App() {
  const [map, setMap] = useState<naver.maps.Map>();
  const [marker, setMarker] = useState<naver.maps.Marker>();
  const [center, setCenter] = useState<naver.maps.LatLng>(new naver.maps.LatLng(37.3595704, 127.105399));
  const [currentLatLng, setCurrentLatLng] = useState<naver.maps.LatLng>(new naver.maps.LatLng(37.3595704, 127.105399));
  const [showFavoriteState, setShowFavoriteState] = useState<boolean>(false);
  const [isMarkerFixed, setIsMarkerFixed] = useState<boolean>(false);
  const [addFavoriteState, setAddFavoriteState] = useState<boolean>(false);
  const [favoriteMarkerLists, setFavoriteMarkerLists] = useState<naver.maps.Marker[]>([]);

  const { addFavorite, removeFavorite } = useAddFavorite();

  const [topInset, setTopInset] = useState<number>(0);

  const favoriteButtonState = `${showFavoriteState ? "activated" : "deactivated"}-favorite`;

  useEffect(() => {
    if (map) {
      clickMap({ favoriteMarkerLists, map, marker, setCurrentLatLng, setIsMarkerFixed, setShowFavoriteState, setAddFavoriteState });
      dragMap({ map, setIsMarkerFixed });
    }
  }, [map, marker, favoriteMarkerLists, center]);

  useEffect(() => {
    // react-native와 통신할 때 사용
    if (window.ReactNativeWebView) {
      window.addEventListener("message", (e) => {
        const response: CoordinationProps = JSON.parse(e.data);
        if (response.type === "initialRequest") {
          initialRequest({ response, setMap, setCenter, setMarker, setTopInset });
        }
        if (response.type === "realTimeRequest") {
          setCenter(new naver.maps.LatLng(response.coords.latitude, response.coords.longitude));
        }
      });
      window.removeEventListener("message", (e) => console.log(e));
    }
  }, []);

  const handleSetMapCetner = () => {
    setMapCenter({ map, marker, center, setIsMarkerFixed });
  };

  const handleShowFavorite = () => {
    showFavorite({ showFavoriteState, setShowFavoriteState, favoriteMarkerLists });
  };

  const handleAddFavorite = () => {
    setAddFavoriteState((prev) => !prev);

    // 추가할 때
    if (!addFavoriteState) {
      addFavorite({ map, currentLatLng, favoriteMarkerLists, setFavoriteMarkerLists });
    }

    // 제거할 때
    if (addFavoriteState) {
      removeFavorite({ favoriteMarkerLists });
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
