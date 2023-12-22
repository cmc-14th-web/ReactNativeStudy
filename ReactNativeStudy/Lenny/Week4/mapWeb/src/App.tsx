import { useEffect } from "react";
import "./App.css";

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
