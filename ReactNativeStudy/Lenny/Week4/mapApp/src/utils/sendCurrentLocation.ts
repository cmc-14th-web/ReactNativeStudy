import Geolocation from '@react-native-community/geolocation';
import WebView from 'react-native-webview';

const sendCurrentLocation = (currentRef: React.RefObject<WebView>) => {
  Geolocation.getCurrentPosition(info =>
    currentRef.current?.postMessage(JSON.stringify(info)),
  );
};

export default sendCurrentLocation;
