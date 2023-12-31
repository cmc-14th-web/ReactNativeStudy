import Geolocation from '@react-native-community/geolocation';
import WebView from 'react-native-webview';

const realTimeRequest = (currentRef: React.RefObject<WebView>) => {
  Geolocation.getCurrentPosition(info =>
    currentRef.current?.postMessage(
      JSON.stringify({type: 'realTimeRequest', ...info}),
    ),
  );
};

export default realTimeRequest;
