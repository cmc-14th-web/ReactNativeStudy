import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

import {windowWidth, windowHeight} from '../../constants/screenSize';

const Map = () => {
  return (
    <WebView
      source={{uri: 'https://cmc-map.vercel.app/'}}
      style={mapStyles.webview}
    />
  );
};

export default Map;

const mapStyles = StyleSheet.create({
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});
