import Geolocation from '@react-native-community/geolocation';
import WebView from 'react-native-webview';

const initialRequest = (
  currentRef: React.RefObject<WebView>,
  topInset: number,
) => {
  Geolocation.getCurrentPosition(info =>
    currentRef.current?.postMessage(
      JSON.stringify({type: 'initialRequest', ...info, topInset: topInset}),
    ),
  );
};

export default initialRequest;
