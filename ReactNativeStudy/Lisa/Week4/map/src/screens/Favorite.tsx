import {StyleSheet, View} from 'react-native';

import {theme} from '../styles/theme';
import FavoriteLocationHeader from '../components/FavoriteLocation/FavoriteLocationHeader';
import FavoriteLocationList from '../components/FavoriteLocation/FavoriteLocationList';

const Favorite = () => {
  return (
    <View style={favoriteScreenStyles.container}>
      <FavoriteLocationHeader />
      <FavoriteLocationList />
    </View>
  );
};

export default Favorite;

const favoriteScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.blue_200,
  },
});
