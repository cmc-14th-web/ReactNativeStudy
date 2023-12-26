import { useEffect } from "react";

import { kakaoMap, kakaoMapLatLng } from "../models/kakaoMap";

const { kakao } = window;

const Map = () => {
  const initMap = () => {
    const container = document.getElementById("map")!;
    const options = {
      center: new kakao.maps.LatLng(37.57624333333333, 126.90153333333333),
      level: 3,
    };

    return new kakao.maps.Map(container, options);
  };

  const moveLocation = (map: kakaoMap, center: kakaoMapLatLng) => {
    map?.setCenter(center);
  };

  const setMarker = (map: kakaoMap, center: kakaoMapLatLng) => {
    const marker = new kakao.maps.Marker({
      position: center,
    });

    marker.setMap(map);
  };

  const getLocationFromMessage = (map: kakaoMap, event: Event) => {
    const message = JSON.parse((event as MessageEvent).data);

    if (message.type === "location") {
      const { latitude, longitude } = message.payload;
      const center = new kakao.maps.LatLng(latitude, longitude);

      moveLocation(map, center);
      setMarker(map, center);
    }
  };

  useEffect(() => {
    const map = initMap();

    document.addEventListener("message", (event: Event) =>
      getLocationFromMessage(map, event)
    );

    return () => {
      document.removeEventListener("message", (event: Event) =>
        getLocationFromMessage(map, event)
      );
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
};

export default Map;
