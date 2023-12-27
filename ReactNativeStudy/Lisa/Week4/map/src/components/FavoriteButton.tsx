import {StyleSheet, TouchableOpacity} from 'react-native';
import {useStore} from 'zustand';

import {webViewRefStore} from '../libs/store/webviewRef';
import {theme} from '../styles/theme';
import SvgIcons from './SvgIcons';

const FavoriteButton = ({
  variant = 'home',
  activated = false,
}: {
  variant?: 'favorite' | 'home';
  activated?: boolean;
}) => {
  const {webViewRef} = useStore(webViewRefStore);

  const handlePressFavoriteButton = () => {
    const message = {
      type: 'favoriteLocation',
    };

    webViewRef.current?.postMessage(JSON.stringify(message));
  };

  const getStyle = () => {
    if (variant === 'home') {
      return {
        ...favoriteButtonStyles.homeContainer,
        ...favoriteButtonStyles.container,
        ...(activated
          ? {...favoriteButtonStyles.activated}
          : {...favoriteButtonStyles.inactivated}),
      };
    } else {
      return {
        ...favoriteButtonStyles.container,
        ...(activated
          ? {...favoriteButtonStyles.activated}
          : {...favoriteButtonStyles.inactivated}),
      };
    }
  };

  return (
    <TouchableOpacity style={getStyle()} onPress={handlePressFavoriteButton}>
      <SvgIcons iconVariant={'Star'} fill={'white'} />
    </TouchableOpacity>
  );
};

export default FavoriteButton;

const favoriteButtonStyles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeContainer: {
    position: 'absolute',
    top: 17,
    right: 13,
  },
  activated: {
    backgroundColor: `${theme.palette.blue_600}`,
  },
  inactivated: {
    backgroundColor: `${theme.palette.gray_600}`,
  },
});
