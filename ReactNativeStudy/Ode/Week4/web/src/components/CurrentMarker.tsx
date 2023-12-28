import { MarkerF } from "@react-google-maps/api";
import { Location } from "./Map";

type CurrentMarkerProps = { location: Location };

export default function CurrentMarker({ location }: CurrentMarkerProps) {
  return (
    <MarkerF
      position={location}
      icon={{
        url: require("../assets/map.svg").default,
        scaledSize: new window.google.maps.Size(46, 46),
      }}
    />
  );
}
