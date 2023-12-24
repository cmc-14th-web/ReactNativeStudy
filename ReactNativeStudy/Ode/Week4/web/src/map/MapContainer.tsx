import { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, IMapProps } from "google-maps-react";
import { key } from "./key";

const MapContainer = (props: IMapProps) => {
  const [center, setCenter] = useState(props.initialCenter);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const mapData: MapData = JSON.parse(event.data);
        setCenter({ lat: mapData.lat, lng: mapData.lng });
      } catch (error) {
        console.error("Error parsing message from React Native", error);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return <Map google={props.google} center={center} />;
};

export default GoogleApiWrapper({
  apiKey: key,
})(MapContainer);

type MapData = {
  lat: number;
  lng: number;
  initialCenter: {
    lat: number;
    lng: number;
  };
};
