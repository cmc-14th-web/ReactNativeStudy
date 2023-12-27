import { useCallback, useEffect, useState } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { key } from "./key";
import ReactDOM from "react-dom";
import StarButton from "./StarButton";
import NavigateBookmarkPageButton from "./NavigateBookmarkPageButton";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export type Location = {
  lat: number;
  lng: number;
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

  const [currentLocation, setCurrentLocation] = useState<Location | undefined>(() => {
    const savedLocation = localStorage.getItem("currentLocation");
    return savedLocation ? (JSON.parse(savedLocation) as Location) : undefined;
  });

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const parsedData = JSON.parse(event.data);
        switch (parsedData?.type) {
          case "init": {
            setCurrentLocation(parsedData.data);
            localStorage.setItem("currentLocation", JSON.stringify(parsedData.data));
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
        console.log(error);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    const savedLocation = localStorage.getItem("currentLocation");
    if (savedLocation) {
      setCurrentLocation(JSON.parse(savedLocation));
    }
  }, []);

  const setBookmarkButton = useCallback(
    (mapInstance: google.maps.Map) => {
      const controlButton = document.createElement("div");
      ReactDOM.render(
        <>
          <NavigateBookmarkPageButton />
          <StarButton location={currentLocation} />
        </>,
        controlButton
      );
      mapInstance.controls[window.google.maps.ControlPosition.LEFT_TOP].push(controlButton);
    },
    [currentLocation]
  );

  return isLoaded && currentLocation ? (
    <GoogleMap
      options={{ disableDefaultUI: true }}
      mapContainerStyle={containerStyle}
      center={currentLocation}
      zoom={10}
      onLoad={setBookmarkButton}>
      <MarkerF
        position={currentLocation}
        icon={{
          url: require("../assets/map.svg").default,
          scaledSize: new window.google.maps.Size(46, 46),
        }}
      />
    </GoogleMap>
  ) : null;
}
