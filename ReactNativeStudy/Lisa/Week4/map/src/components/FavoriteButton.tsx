import {StyleSheet, TouchableOpacity} from 'react-native';
import SvgIcons from './SvgIcons';
import {theme} from '../styles/theme';

const FavoriteButton = () => {
  return (
    <TouchableOpacity style={favoriteButtonStyles.container}>
      <SvgIcons iconVariant={'Star'} fill={'white'} />
    </TouchableOpacity>
  );
};

export default FavoriteButton;

const favoriteButtonStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 17,
    right: 13,
    width: 30,
    height: 30,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${theme.palette.gray_600}`,
  },
});
