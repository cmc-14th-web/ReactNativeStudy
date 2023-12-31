import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import NavigateBookmarkPageButton from "./NavigateBookmarkPageButton";
import StarButton from "./StarButton";
import { key } from "./key";
import CurrentMarker from "./CurrentMarker";
import { BookMarks } from "../types/bookmarks";
import BookMarker from "./BookMarker";

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

  const [bookmarks, setbookmarks] = useState<BookMarks>(() => {
    const savedBookmarks = localStorage.getItem("bookmarks");
    return savedBookmarks ? JSON.parse(savedBookmarks) : {};
  });

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const { type, data } = JSON.parse(event.data);
        console.log("web:", type, data);
        switch (type) {
          case "init":
          case "location": {
            setCurrentLocation(data);
            localStorage.setItem("currentLocation", JSON.stringify(data));
            break;
          }
          case "bookmarks": {
            setbookmarks(data);
            localStorage.setItem("currentLocation", JSON.stringify(data));
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

  const setBookmarkButton = useCallback((mapInstance: google.maps.Map) => {
    const controlButton = document.createElement("div");
    ReactDOM.render(
      <>
        <NavigateBookmarkPageButton />
        <StarButton />
      </>,
      controlButton
    );
    mapInstance.controls[window.google.maps.ControlPosition.LEFT_TOP].push(controlButton);
  }, []);

  console.log(currentLocation);
  return isLoaded && currentLocation ? (
    <GoogleMap
      options={{ disableDefaultUI: true }}
      mapContainerStyle={containerStyle}
      center={currentLocation}
      zoom={10}
      onLoad={setBookmarkButton}>
      <CurrentMarker location={currentLocation} />
      {Object.entries(bookmarks).map(([key, bookmark]) => (
        <BookMarker key={key} {...bookmark} />
      ))}
    </GoogleMap>
  ) : null;
}
