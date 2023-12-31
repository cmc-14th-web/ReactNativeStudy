import { useEffect, useState } from "react";
import LikedButton from "./LikedButton";
import Map from "./Map";
import AddLikedButton from "./AddLikedButton";
import { RingLoader } from "react-spinners";

interface Location {
  latitude: number | null;
  longitude: number | null;
}

function MapContainer() {
  // 초기 위치 RN에서 받아와야 함!! => 상태로 초기화 (잠깐 pass)
  const [currentLocation, setCurrentLocation] = useState<Location>({
    latitude: 37.5408,
    longitude: 127.0701,
  }); // 초기 위치값

  // 현재 위치 값 받아오기
  useEffect(() => {
    const handleMessage = (event: Event) => {
      console.log("rn으로 부터 데이터 도착!!");
      const message = JSON.parse((event as MessageEvent).data);

      if (message.type === "location") {
        console.log("타입까지 제대로 도착했어어어엉");
        const { latitude, longitude } = message.payload;
        console.log("RN으로 데이터 받아오기");
        setCurrentLocation({
          latitude,
          longitude,
        });
      }
    };
    document.addEventListener("message", handleMessage);
    //return () => {
    //  document.removeEventListener("message", handleMessageEvent);
    //};
  }, []);

  const [liked, setLiked] = useState<boolean>(false);
  const [mapClicked, setMapClicked] = useState<boolean>(false);
  return (
    <div className="relative h-full">
      {(() => {
        //즐겨찾기 확인 버튼
        if (!mapClicked) {
          return (
            <div className="absolute top-4 left-4 z-10">
              <LikedButton selected={liked} setSelected={setLiked} />
            </div>
          );
          //즐겨 찾기 장소 추가 버튼
        } else {
          return (
            <div className="absolute top-4 right-4 z-10">
              <AddLikedButton
                selected={mapClicked}
                setSelected={setMapClicked}
              />
            </div>
          );
        }
      })()}
      {(() => {
        if (currentLocation.latitude && currentLocation.longitude) {
          return (
            <Map
              latitude={currentLocation.latitude}
              longitude={currentLocation.longitude}
              liked={liked}
              setLiked={setLiked}
              mapClicked={mapClicked}
              setMapClicked={setMapClicked}
            />
          );
          //즐겨 찾기 장소 추가 버튼
        } else {
          return (
            <div className="flex justify-center mt-4">
              <RingLoader size={50} color="#3649d7" />
            </div>
          );
        }
      })()}
    </div>
  );
}
export default MapContainer;
