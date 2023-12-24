import { useEffect } from "react";
import "./App.css";

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
  const initMap = (latitude: number, longitude: number) => {
    const center: naver.maps.LatLng = new naver.maps.LatLng(latitude, longitude);
    const map: naver.maps.Map = new naver.maps.Map("map", {
      center: center,
      zoomControl: true,
      zoom: 16,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: map,
    });

    map;
    marker;
  };

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
      window.ReactNativeWebView.postMessage(`${currentLatitude}, ${currentLongitude}`);
      initMap(currentLatitude, currentLongitude);
    });
    window.removeEventListener("message", (e) => console.log(e));
  }

  return <div id="map"></div>;
}
