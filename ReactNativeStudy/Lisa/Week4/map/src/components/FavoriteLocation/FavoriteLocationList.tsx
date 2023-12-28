import {StyleSheet, View} from 'react-native';

import {theme} from '../../styles/theme';

const FavoriteLocationList = () => {
  return <View style={favoriteLocationListStyles.container}></View>;
};

export default FavoriteLocationList;

const favoriteLocationListStyles = StyleSheet.create({
  container: {
    height: `100%`,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: theme.palette.white,
  },
});
