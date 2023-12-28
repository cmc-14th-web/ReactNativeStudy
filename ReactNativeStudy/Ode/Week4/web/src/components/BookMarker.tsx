import { MarkerF } from "@react-google-maps/api";
import { Location } from "./Map";

export default function BookMarker({ lat, lng }: Location) {
  return (
    <MarkerF
      position={{ lat, lng }}
      icon={{
        url: require("../assets/star.svg").default,
        scaledSize: new window.google.maps.Size(24, 24),
      }}
    />
  );
}
