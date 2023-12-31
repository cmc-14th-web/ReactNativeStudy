import React, {RefObject} from 'react';
import {StyleSheet} from 'react-native';
import SvgIcons from '../assets/icons/SvgIcons';
import COLORS from '../constants/colors';
import {TouchableOpacity} from 'react-native';
import accessLocationInfo from '../utils/getLocationInfo';
import WebView from 'react-native-webview';
import favoriteStore, {StoreType} from '../store';
import {NORMAL} from '../constants/state';

const CurrentLocationButton = ({
  webViewRef,
}: {
  webViewRef: RefObject<WebView>;
}) => {
  const setCurState = favoriteStore((state: StoreType) => state.setCurState);

  const handleClickButton = async () => {
    setCurState(NORMAL);
    const [latitude, longitude] = await accessLocationInfo();

    if (latitude && longitude) {
      webViewRef.current?.postMessage(JSON.stringify({latitude, longitude}));
    }
  };
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={handleClickButton}>
      <SvgIcons.LocationIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    bottom: 20,
    backgroundColor: COLORS.WHITE,
    borderRadius: 100,
    padding: 16,
    boxShadow: '5px 5px 5px gray',
    elevation: 5,
  },
});

export default CurrentLocationButton;
