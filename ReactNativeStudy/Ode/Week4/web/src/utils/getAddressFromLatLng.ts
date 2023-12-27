import { Location } from "../components/Map";

/**
 * geocoder를 사용해 좌표로부터 지역명 추출
 */
export function getAddressFromLatLng(location: Location, callback: GeocodeResultCallback) {
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ location }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK && results) {
      callback(null, results);
    } else if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
      callback("No results found");
    } else {
      callback("Geocoder failed due to: " + status);
    }
  });
}

type GeocodeResultCallback = (error: string | null, results?: google.maps.GeocoderResult[]) => void;
