import { useEffect } from "react";
import "./App.css";

const script = document.createElement("script");
script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${import.meta.env.VITE_NAVER_MAPS_CLIENT_ID}`;
document.head.appendChild(script);

export default function App() {
  useEffect(() => {
    const center: naver.maps.LatLng = new naver.maps.LatLng(37.5666103, 126.9783882);
    const map: naver.maps.Map = new naver.maps.Map("map", {
      center: center,
      zoom: 16,
    });

    map;
  }, []);

  return <div id="map"></div>;
}
