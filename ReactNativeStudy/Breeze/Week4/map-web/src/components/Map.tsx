"use client";

import { useAllLikedPlaces } from "@/atoms/allLikedPlaces";
import { likedPlaceState } from "@/atoms/likedPlace";
import { kakaoKey } from "@/configs/key";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { markerMakeHandler } from "@/utils/markerMakeHandler";

interface MapProps {
  latitude: number | null;
  longitude: number | null;
  liked: boolean;
  setLiked: (value: boolean) => void;
  mapClicked: boolean;
  setMapClicked: (value: boolean) => void;
}

function Map({
  latitude,
  longitude,
  liked,
  setLiked,
  mapClicked,
  setMapClicked,
}: MapProps) {
  // 즐겨찾기 한 장소들 배열
  const { allLikedPlaces } = useAllLikedPlaces();
  console.log("즐겨찾기 장소들", allLikedPlaces);

  const [marker, setMarker] = useState<any>();
  let map;

  // 즐겨 찾기 할 위치 위도 경도 저장할 함수
  const setLikedPlace = useSetRecoilState(likedPlaceState);

  // 카카오맵 불러오기
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);
        // 현재 위치로 첫 마커 세팅
        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude
        );

        const initialMarkerImg = markerMakeHandler(
          "currentLocation.png",
          30,
          30
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: initialMarkerImg,
        });
        marker.setMap(map);

        // 즐겨찾기 비활성화 상태일 때
        if (!liked) {
          const checkMarkerImg = markerMakeHandler("marker.png", 45, 45);
          window.kakao.maps.event.addListener(
            map,
            "click",
            function (mouseEvent: any) {
              if (!mapClicked) {
                setMapClicked(true);
              }
              marker.setImage(checkMarkerImg);
              const clickedLatlng = mouseEvent.latLng;

              marker.setMap(null);
              // 마커를 클릭한 위치에 표시
              marker.setPosition(mouseEvent.latLng);
              marker.setMap(map);

              // 클릭한 위치가 맵의 중심이 되게 이동
              map.panTo(clickedLatlng);

              setLikedPlace({
                latitude: clickedLatlng.getLat(),
                longitude: clickedLatlng.getLng(),
              });
            }
          );
        } else {
          // 즐겨 찾기 활성화 상태
          // 즐겨찾기 한 모든 마커들 다 찍기
          const likedMarkerImg = markerMakeHandler("likeLocation.png", 20, 20);

          allLikedPlaces.forEach((likedPlace) => {
            const { latitude, longitude } = likedPlace;
            const likedMarkerPosition = new window.kakao.maps.LatLng(
              latitude,
              longitude
            );
            const likedMarker = new window.kakao.maps.Marker({
              position: likedMarkerPosition,
              image: likedMarkerImg,
            });
            likedMarker.setMap(map);
          });
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [
    allLikedPlaces,
    latitude,
    liked,
    longitude,
    map,
    mapClicked,
    marker,
    setLikedPlace,
    setMapClicked,
  ]);

  return <div id="map" className="w-full rounded-lg h-screen" />;
}
export default Map;
