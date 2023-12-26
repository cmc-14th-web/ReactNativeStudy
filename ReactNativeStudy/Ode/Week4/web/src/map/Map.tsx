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

  const [currentLocation, setCurrentLocation] = useState<
    | {
        lat: number;
        lng: number;
      }
    | undefined
  >(() => {
    const savedLocation = localStorage.getItem("currentLocation");
    return savedLocation ? JSON.parse(savedLocation) : undefined;
  });

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const parsedData = JSON.parse(event.data);
        switch (parsedData?.type) {
          case "init": {
            setCurrentLocation(parsedData.data);
            localStorage.setItem("currentLocation", JSON.stringify(parsedData.data));
            console.log("init", parsedData.data);
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

    // Load the initial location from local storage
    const savedLocation = localStorage.getItem("currentLocation");
    if (savedLocation) {
      setCurrentLocation(JSON.parse(savedLocation));
    }

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return isLoaded && currentLocation ? (
    <GoogleMap mapContainerStyle={containerStyle} center={currentLocation} zoom={10}>
      <MarkerF
        position={currentLocation}
        icon={{
          url: require("./map.svg").default,
          scaledSize: new window.google.maps.Size(46, 46),
        }}
      />
    </GoogleMap>
  ) : null;
}
