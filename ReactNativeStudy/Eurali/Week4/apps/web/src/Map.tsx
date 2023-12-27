import React, { useEffect, useRef, useState } from 'react';
import currentPosIcon from './constants/currentPosIcon';
import clickedPosIcon from './constants/clickedPosIcon';
import roundStar from './constants/roundStar';
import getAddress from './utils/getAddress';

const { kakao } = window;

const Map = () => {
  const mapContainerRef = useRef(null);
  const [kakaoMap, setKakaoMap] = useState<any>();
  const markersArr: any[] = [];

  const initMap = () =>{
    const container = mapContainerRef.current;
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    setKakaoMap(new kakao.maps.Map(container, options));
  }

  useEffect(() => {
    kakao.maps.load(() => initMap());
  }, []);

  const deleteAllMarkers = () => {
    for (let i=0; i<markersArr.length; i++) {
      markersArr[i].setMap(null);
    }
    markersArr.length = 0;
  }

  const getMessage = (event: any) => {
    const data = JSON.parse(event.data);
    if (data.latitude && data.longitude) { // 현위치 정보를 받는 경우
      const currentPosition = new kakao.maps.LatLng(data.latitude, data.longitude);
      kakaoMap.panTo(currentPosition);

      const marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: currentPosition,
        image: currentPosIcon
      })
      deleteAllMarkers();
      markersArr.push(marker);
    } else { // 즐겨찾기 장소들 정보를 받는 경우
      deleteAllMarkers();
      for (let i = 0; i < data.length; i ++) {
        const favoriteMarker = new kakao.maps.Marker({
            map: kakaoMap,
            position: new kakao.maps.LatLng(data[i].position.latitude, data[i].position.longitude),
            image : roundStar
        });
        markersArr.push(favoriteMarker);
      }
    }
  };

  const handleClickMap = async(mouseEvent: any) => {
    const latlng = mouseEvent.latLng;
    
    const marker = new kakao.maps.Marker({
      map: kakaoMap,
      position: latlng,
      image: clickedPosIcon
    })
    deleteAllMarkers();
    markersArr.push(marker);
    
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
