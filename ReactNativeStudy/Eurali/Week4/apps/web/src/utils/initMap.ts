import React from "react";

const { kakao } = window;

const initMap = (container: React.RefObject<HTMLInputElement>, setKakaoMap: (m: any) => void) => {
  //const container = mapContainerRef.current;
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
  };
  setKakaoMap(new kakao.maps.Map(container.current, options));
};

export default initMap;
