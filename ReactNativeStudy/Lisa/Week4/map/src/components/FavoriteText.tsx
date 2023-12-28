import {StyleSheet, Text, View} from 'react-native';

import {typoStyles} from '../styles/typo';
import {theme} from '../styles/theme';

const FavoriteText = () => {
  return (
    <View style={favoriteTextStyles.container}>
      <Text style={favoriteTextStyles.text}>즐겨찾기</Text>
    </View>
  );
};

export default FavoriteText;

const favoriteTextStyles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 20,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.palette.black,
    backgroundColor: theme.palette.white,
  },
  text: {
    fontSize: typoStyles.typo.body_2.fontSize,
    fontWeight: typoStyles.typo.body_2.fontWeight,
    lineHeight: typoStyles.typo.body_2.lineHeight,
    color: theme.palette.black,
  },
});
