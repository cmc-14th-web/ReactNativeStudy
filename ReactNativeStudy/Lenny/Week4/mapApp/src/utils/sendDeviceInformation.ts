import Geolocation from '@react-native-community/geolocation';
import WebView from 'react-native-webview';

const sendDeviceInformation = (
  currentRef: React.RefObject<WebView>,
  topInset: number,
) => {
  Geolocation.getCurrentPosition(info =>
    currentRef.current?.postMessage(
      JSON.stringify({...info, topInset: topInset}),
    ),
  );
};

export default sendDeviceInformation;
