import React, { useEffect, useRef, useState } from 'react';
import currentPosIcon from './constants/currentPosIcon';
import clickedPosIcon from './constants/clickedPosIcon';
import roundStar from './constants/roundStar';
import getAddress from './utils/getAddress';
import deleteAllMarkers from './utils/deleteAllMarkers';
import initMap from './utils/initMap';
import initMarker from './utils/initMarker';

const { kakao } = window;

const Map = () => {
  const mapContainerRef = useRef(null);
  const [kakaoMap, setKakaoMap] = useState<any>();
  const markersArr: any[] = [];

  useEffect(() => {
    kakao.maps.load(() => initMap(mapContainerRef, setKakaoMap));
  }, []);

  const getMessage = (event: any) => {
    const data = JSON.parse(event.data);
    if (data.latitude && data.longitude) { // 현위치 정보를 받는 경우
      deleteAllMarkers(markersArr);
      const currentPosition = new kakao.maps.LatLng(data.latitude, data.longitude);
      kakaoMap.panTo(currentPosition);
      initMarker(kakaoMap, currentPosition, currentPosIcon, markersArr)
    } else { // 즐겨찾기 장소들 정보를 받는 경우
      deleteAllMarkers(markersArr);
      for (let i = 0; i < data.length; i ++) {
        const favoritePos = new kakao.maps.LatLng(data[i].position.latitude, data[i].position.longitude)
        initMarker(kakaoMap, favoritePos, roundStar, markersArr);
      }
    }
  };

  const handleClickMap = async (mouseEvent: any) => {
    deleteAllMarkers(markersArr);
    const latlng = mouseEvent.latLng;
    initMarker(kakaoMap, latlng, clickedPosIcon, markersArr);

    const clickedPos = {
      position: {
        latitude: latlng.Ma,
        longitude: latlng.La,
      },
      address: await getAddress(latlng.Ma, latlng.La)
    };
    window.ReactNativeWebView.postMessage(JSON.stringify(clickedPos));
  };

  useEffect(() => {
    document.addEventListener("message", getMessage);
    if (kakaoMap) {
      kakao.maps.event.addListener(kakaoMap, 'click', handleClickMap);
    }
    return () => {
      document.removeEventListener("message", getMessage);
      if (kakaoMap) {
        kakao.maps.event.removeListener(kakaoMap, 'click', handleClickMap);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kakaoMap]);

  return (
    <div style={mapStyle} ref={mapContainerRef}></div>
  )
}

const mapStyle = {
  width: '450px',
  height: '610px',
}

export default Map;
