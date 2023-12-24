import { useEffect, useState } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { key } from "./key";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 0, lng: 0 });
  console.log(currentLocation);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const parsedData = JSON.parse(event.data);
        switch (parsedData?.type) {
          case "init": {
            setCurrentLocation(parsedData.data);
            break;
          }
          case "location": {
            setCurrentLocation(parsedData.data);
            break;
          }
          default: {
            return;
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    window.addEventListener("message", handleMessage);
    console.log("mount");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={currentLocation} zoom={10}>
      <MarkerF
        position={currentLocation}
        icon={{
          url: require("./map.svg"),
          scaledSize: new window.google.maps.Size(32, 32),
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}
