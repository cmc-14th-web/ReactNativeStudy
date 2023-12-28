/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
const { kakao } = window;

const App = () => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const container = document.getElementById("map");

    if (!mapRef.current) {
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
      };
      mapRef.current = new kakao.maps.Map(container, options);
    }

    addEventListener("message", (e) => {
      const data = JSON.parse(e.data);
      const type = data.type;
      const markerPosition = new kakao.maps.LatLng(
        data.latitude,
        data.longitude
      );

      if (type === "init") mapRef.current.setCenter(markerPosition);
      else {
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(mapRef.current);
      }
    });
  }, []);

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
};

export default App;
