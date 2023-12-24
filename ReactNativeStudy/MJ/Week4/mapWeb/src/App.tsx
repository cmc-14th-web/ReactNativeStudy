import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const App = () => {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      // ...
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);
  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
};

export default App;
