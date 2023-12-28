/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
const { kakao, ReactNativeWebView } = window;

const App = () => {
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const starsRef = useRef<any[]>([]);

  function addMarker(position: any) {
    if (markerRef.current) {
      markerRef.current.setMap(null);
    }
    if (starsRef.current.length > 0) {
      for (const star of starsRef.current) {
        star.setMap(null);
      }
    }

    const kakaoMarker = new kakao.maps.Marker({
      position: position,
    });
    kakaoMarker.setMap(mapRef.current);
    markerRef.current = kakaoMarker;

    const geocoder = new kakao.maps.services.Geocoder();
    if (kakao.maps && kakao.maps.services && kakao.maps.services.Geocoder) {
      geocoder.coord2Address(
        position.La,
        position.Ma,
        (result: any, status: any) => {
          if (status === kakao.maps.services.Status.OK) {
            const roadAddress = result[0].road_address?.address_name;
            if (
              navigator.userAgent.includes("iPhone") ||
              navigator.userAgent.includes("Android")
            ) {
              const message = JSON.stringify({
                latitude: position.Ma,
                longitude: position.La,
                roadAddress: roadAddress,
              });
              ReactNativeWebView.postMessage(message);
            }
          }
        }
      );
    }
  }

  useEffect(() => {
    const container = document.getElementById("map");

    if (!mapRef.current) {
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
      };
      mapRef.current = new kakao.maps.Map(container, options);
      kakao.maps.event.addListener(
        mapRef.current,
        "click",
        function (mouseEvent: any) {
          addMarker(mouseEvent.latLng);
        }
      );
    }

    const global = navigator.userAgent.includes("iPhone") ? window : document;

    global.addEventListener("message", (e: any) => {
      const data = JSON.parse(e.data);
      const type = data.type;

      if (type === "init") {
        const markerPosition = new kakao.maps.LatLng(
          data.latitude,
          data.longitude
        );

        mapRef.current.setCenter(markerPosition);
      }
      if (type === "post") {
        const markerPosition = new kakao.maps.LatLng(
          data.latitude,
          data.longitude
        );
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(mapRef.current);
      }
      if (type === "stars") {
        const stars = data.stars;
        if (starsRef.current.length > 0) {
          for (const star of starsRef.current) {
            star.setMap(null);
          }
        }
        stars.current = [];

        for (const star of stars) {
          const markerPosition = new kakao.maps.LatLng(
            star.latitude,
            star.longitude
          );
          const marker = new kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(mapRef.current);
          starsRef.current = [...starsRef.current, marker];
        }
      }
    });
  }, []);

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
};

export default App;
