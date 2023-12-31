import {StyleSheet, TouchableOpacity} from 'react-native';

import {FavoriteButtonProps} from '../../models/favoriteButton';
import {theme} from '../../styles';
import SvgIcons from '../SvgIcons';

const FavoriteButton = ({
  variant = 'home',
  activated = false,
}: FavoriteButtonProps) => {
  const getStyle = () => {
    const baseStyle = {
      ...favoriteButtonStyles.container,
      ...(activated
        ? {...favoriteButtonStyles.activated}
        : {...favoriteButtonStyles.inactivated}),
    };

    return variant === 'home'
      ? {...baseStyle, ...favoriteButtonStyles.homeContainer}
      : baseStyle;
  };

  return (
    <TouchableOpacity style={getStyle()}>
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
    backgroundColor: theme.palette.blue_600,
  },
  inactivated: {
    backgroundColor: theme.palette.gray_600,
  },
});
