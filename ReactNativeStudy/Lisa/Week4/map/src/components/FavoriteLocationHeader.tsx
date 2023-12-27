import {StyleSheet, View} from 'react-native';
import {theme} from '../styles/theme';
import FavoriteButton from './FavoriteButton';
import FavoriteText from './FavoriteText';

const FavoriteLocationHeader = () => {
  return (
    <View style={favoriteLocationHeaderStyles.container}>
      <FavoriteButton activated={true} variant="favorite" />
      <FavoriteText />
    </View>
  );
};

export default FavoriteLocationHeader;

const favoriteLocationHeaderStyles = StyleSheet.create({
  container: {
    height: 152,
    backgroundColor: `${theme.palette.blue_200}`,
    paddingTop: 54,
    alignItems: 'center',
  },
});
