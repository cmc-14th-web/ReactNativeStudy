import { useEffect, useState } from "react";
import "./App.css";
import { clickedLocation, myLocation } from "./constants/icon";

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (data: string) => void;
    };
  }
}

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
  const [activatedFavorite, setActivatedFavorite] = useState<boolean>(false);

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
      icon: myLocation,
    });

    setMap(naverMap);
    setMarker(myLocationMarker);
    setCenterLocation(center);

    naverMap;
    myLocationMarker;
  };

  if (map) {
    const click = naver.maps.Event.addListener(map, "click", (e) => {
      marker?.setPosition(e.coord);
      marker?.setIcon(clickedLocation);
      naver.maps.Event.removeListener(click);
    });
  }

  // web으로 확인할 때 사용
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (e) => initMap(e.coords.latitude, e.coords.longitude),
  //     (err) => console.log(err)
  //   );
  // }, []);

  // react-native와 통신할 때 사용
  if (window.ReactNativeWebView) {
    window.addEventListener("message", (e) => {
      const currentLocation: CoordinationProps = JSON.parse(e.data);
      const { latitude: currentLatitude, longitude: currentLongitude } = currentLocation.coords;
      initMap(currentLatitude, currentLongitude);
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: "init", loading: false }));
    });
    window.removeEventListener("message", (e) => console.log(e));
  }

  const setMapCetner = () => {
    map?.setCenter(centerLocation);
    marker?.setPosition(centerLocation);
    marker?.setIcon(myLocation);
  };

  return (
    <div id="map">
      <button className={`${favoriteButtonState}-button`} onClick={() => setActivatedFavorite(!activatedFavorite)}>
        <img className="favorite-img" src={`../public/assets/${favoriteButtonState}.svg`} alt="즐겨찾기" />
        즐겨찾기
      </button>
      <button className="current-location-button" onClick={setMapCetner}>
        <img src="../public/assets/my-location.svg" alt="내 위치" />
      </button>
    </div>
  );
}
