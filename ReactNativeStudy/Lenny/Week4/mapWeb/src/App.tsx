import { useState } from "react";
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
  const [naverMap, setNaverMap] = useState<naver.maps.Map>();
  const [centerLocation, setCenterLocation] = useState<naver.maps.LatLng>(new naver.maps.LatLng(37.3595704, 127.105399));

  const initMap = (latitude: number, longitude: number) => {
    const center: naver.maps.LatLng = new naver.maps.LatLng(latitude, longitude);
    const map: naver.maps.Map = new naver.maps.Map("map", {
      center: center,
      zoomControl: true,
      zoom: 16,
    });

    const marker = new naver.maps.Marker({
      position: center,
      map: map,
      icon: {
        url: "../public/assets/marker.svg",
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(10, 10), // 이미지의 중심점으로 설정
      },
    });

    setNaverMap(map);
    setCenterLocation(center);

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
      initMap(currentLatitude, currentLongitude);
      window.ReactNativeWebView.postMessage(JSON.stringify({ loading: false }));
    });
    window.removeEventListener("message", (e) => console.log(e));
  }

  const setMapCetner = () => naverMap?.setCenter(centerLocation);

  return (
    <div id="map">
      <button className="current-location-button" onClick={setMapCetner}>
        <img src="../public/assets/my-location.svg" alt="내 위치" />
      </button>
    </div>
  );
}
