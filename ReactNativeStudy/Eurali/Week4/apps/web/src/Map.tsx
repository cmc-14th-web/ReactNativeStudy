import React, { useEffect, useRef, useState } from 'react';
import currentPosIcon from './constants/currentPosIcon';
import clickedPosIcon from './constants/clickedPosIcon';
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
    const marker = new kakao.maps.Marker()
    markersArr.push(marker);
  }

  const deleteAllMarkers = () => {
    for (let i=0; i<markersArr.length; i++) {
      markersArr[i].setMap(null);
    }
    markersArr.length = 0;
  }

  useEffect(() => {
    kakao.maps.load(() => initMap());
  }, []);

  const getMessage = (event: any) => {
    const data = JSON.parse(event.data);
    if (data.latitude && data.longitude) {
      const currentPosition = new kakao.maps.LatLng(data.latitude, data.longitude);
      kakaoMap.panTo(currentPosition);
      const marker = new kakao.maps.Marker()
      deleteAllMarkers();
      
      marker.setImage(currentPosIcon);
      marker.setPosition(currentPosition);
      marker.setMap(kakaoMap);
      markersArr.push(marker);
    } else {
      deleteAllMarkers();
      for (let i = 0; i < data.length; i ++) {
        const imageSize = new kakao.maps.Size(20, 20); 
        
        // 마커 이미지를 생성합니다    
        const markerImage = new kakao.maps.MarkerImage('/roundStar.png', imageSize); 
        
        // 마커를 생성합니다
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const favoriteMarker = new kakao.maps.Marker({
            map: kakaoMap, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(data[i].position.latitude, data[i].position.longitude), // 마커를 표시할 위치
            image : markerImage // 마커 이미지 
        });
        markersArr.push(favoriteMarker);
      }
    }
  };

  const handleClickMap = async(mouseEvent: any) => {
    const latlng = mouseEvent.latLng;
    
    const marker = new kakao.maps.Marker()
    deleteAllMarkers();
    marker.setImage(clickedPosIcon);
    marker.setPosition(latlng);
    marker.setMap(kakaoMap);
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
