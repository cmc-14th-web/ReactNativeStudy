import { useEffect } from "react";

const { kakao } = window;

const Map = () => {
  const loadMap = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.57613017644305, 126.90097990232503),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    return map;
  };

  useEffect(() => {
    loadMap();
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "calc(100vh - 17px)" }}></div>
  );
};

export default Map;
