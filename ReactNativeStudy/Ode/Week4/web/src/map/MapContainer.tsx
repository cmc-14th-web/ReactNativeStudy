import { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, IMapProps } from "google-maps-react";
import { key } from "./key";

type MapData = {
  lat: number;
  lng: number;
};

const MapContainer = (props: IMapProps) => {
  const [center, setCenter] = useState<MapData>(props.initialCenter);
  console.log(center);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const parsedData = JSON.parse(event.data);
        switch (parsedData?.type) {
          case "init": {
            setCenter(parsedData.data);
            break;
          }
          case "location": {
            setCenter(parsedData.data);
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

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return <Map google={props.google} center={center} />;
};

export default GoogleApiWrapper({
  apiKey: key,
})(MapContainer);
