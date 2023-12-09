import {View, Text, StyleSheet} from 'react-native';

import {theme} from 'styles/theme';
import {typoStyles} from 'styles/typo';

const NoImage = () => {
  return (
    <View style={noImageContainerStyles.container}>
      <Text style={noImageContainerStyles.text}>업로드한 사진이 없습니다.</Text>
    </View>
  );
};

export default NoImage;

const noImageContainerStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    color: theme.palette.gray_400,
    fontSize: typoStyles.typo.body_1.fontSize,
    fontWeight: typoStyles.typo.body_1.fontWeight,
  },
});
