import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../styles/theme';
import {useStore} from 'zustand';
import {mapStore} from '../libs/store/map';

const FavoriteLocationList = () => {
  const {favoriteLocationList} = useStore(mapStore);

  return (
    <View style={favoriteLocationListStyles.container}>
      {favoriteLocationList.map(favoriteLocation => (
        <Text>{favoriteLocation}</Text>
      ))}
    </View>
  );
};

export default FavoriteLocationList;

const favoriteLocationListStyles = StyleSheet.create({
  container: {
    height: `100%`,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: `${theme.palette.white}`,
  },
});
