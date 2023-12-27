import {StyleSheet, View} from 'react-native';

import FavoriteLocationHeader from '../components/FavoriteLocationHeader';
import FavoriteLocationList from '../components/FavoriteLocationList';
import {theme} from '../styles/theme';

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
    backgroundColor: `${theme.palette.blue_200}`,
  },
});
