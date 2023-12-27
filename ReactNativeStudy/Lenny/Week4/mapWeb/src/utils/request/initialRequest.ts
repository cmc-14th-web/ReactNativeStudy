import { InitialRequestProps } from "../../types/map";
import initMap from "../map/initMap";
import initMarker from "../map/initMarker";

const initialRequest = ({ response, setMap, setCenter, setMarker, setTopInset }: InitialRequestProps) => {
  const { latitude, longitude } = response.coords;
  const { map, center } = initMap({ latitude, longitude, setMap, setCenter });
  initMarker({ center, map, setMarker });
  setTopInset(response.topInset);
  window.ReactNativeWebView.postMessage(JSON.stringify({ type: "init", loading: false }));
};

export default initialRequest;
