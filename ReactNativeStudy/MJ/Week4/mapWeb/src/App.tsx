import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const App = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const map = new window.kakao.maps.Map(container, options);
    window.addEventListener("message", (e) => {
      const data = JSON.parse(e.data);
      const markerPosition = new window.kakao.maps.LatLng(
        data.latitude,
        data.longitude
      );

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      map.setCenter(markerPosition);
      marker.setMap(map);
    });
  }, []);

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
};

export default App;
