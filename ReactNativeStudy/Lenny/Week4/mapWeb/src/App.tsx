import { useEffect, useState } from "react";
import "./App.css";
import { clickedLocationOptions, myLocationOptions } from "./constants/icon";
import { useStore } from "./store/store";
import addFavorite from "./utils/addFavorite";
import { showFavorite } from "./utils/showFavorite";
import removeFavorite from "./utils/removeFavorite";

interface CoordinationProps {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export default function App() {
  const [map, setMap] = useState<naver.maps.Map>();
  const [marker, setMarker] = useState<naver.maps.Marker>();
  const [centerLocation, setCenterLocation] = useState<naver.maps.LatLng>(new naver.maps.LatLng(37.3595704, 127.105399));
  const [reverseLocation, setReverseLocation] = useState<naver.maps.LatLng>(new naver.maps.LatLng(37.3595704, 127.105399));
  const [activatedFavorite, setActivatedFavorite] = useState<boolean>(false);
  const [isMarkerFixed, setIsMarkerFixed] = useState<boolean>(false);
  const [isAddFavorite, setIsAddFavorite] = useState<boolean>(false);
  const [favoriteMarkers, setFavoriteMarkers] = useState<naver.maps.Marker[]>([]);

  const { favoriteMarkerLists } = useStore();

  const favoriteButtonState = `${activatedFavorite ? "activated" : "deactivated"}-favorite`;

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
      naver.maps.Event.addListener(map, "click", (e) => {
        marker?.setPosition(e.coord);
        marker?.setIcon(clickedLocationOptions);
        setReverseLocation(e.coord);
        setIsMarkerFixed(true);
        setActivatedFavorite(false);
        setIsAddFavorite(false);
      });
    }
  }, [map, marker]);

  // web으로 확인할 때 사용
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (e) => initMap(e.coords.latitude, e.coords.longitude),
      (err) => console.log(err)
    );
  }, []);

  // react-native와 통신할 때 사용
  // if (window.ReactNativeWebView) {
  //   window.addEventListener("message", (e) => {
  //     const currentLocation: CoordinationProps = JSON.parse(e.data);
  //     const { latitude: currentLatitude, longitude: currentLongitude } = currentLocation.coords;
  //     initMap(currentLatitude, currentLongitude);
  //     window.ReactNativeWebView.postMessage(JSON.stringify({ type: "init", loading: false }));
  //   });
  //   window.removeEventListener("message", (e) => console.log(e));
  // }

  const setMapCetner = () => {
    map?.setCenter(centerLocation);
    marker?.setPosition(centerLocation);
    marker?.setIcon(myLocationOptions);
    setIsMarkerFixed(false);
  };

  const handleShowFavoriteMarkers = () => {
    showFavorite({ activatedFavorite, setActivatedFavorite, favoriteMarkers });
  };

  const handleAddFavorite = () => {
    setIsAddFavorite(!isAddFavorite);

    // 추가할 때
    if (!isAddFavorite) {
      addFavorite({ favoriteMarkerLists, map, reverseLocation, favoriteMarkers, setFavoriteMarkers });
    }

    // 제거할 때
    if (isAddFavorite) {
      removeFavorite({ favoriteMarkerLists, favoriteMarkers });
    }
  };

  return (
    <div id="map">
      {!isMarkerFixed && (
        <button className={`${favoriteButtonState}-button`} onClick={handleShowFavoriteMarkers}>
          <img className="favorite-img" src={`../assets/${favoriteButtonState}.svg`} alt="즐겨찾기" />
          즐겨찾기
        </button>
      )}
      {isMarkerFixed && (
        <button className="add-favorite-button" onClick={handleAddFavorite}>
          <img src={`../assets/${isAddFavorite ? "after" : "before"}-add-favorite.svg`} alt="즐겨찾기 추가" />
        </button>
      )}
      <button className="current-location-button" onClick={setMapCetner}>
        <img src="../assets/my-location.svg" alt="내 위치" />
      </button>
    </div>
  );
}
