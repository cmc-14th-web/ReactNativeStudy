import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../styles/colors';
import {useStore} from '../../store/store';
import {ImageType} from '../../types/ImageType';

export default function HomeScreen() {
  const {images} = useStore();
  const {width: deviceWidth} = Dimensions.get('window');

  return (
    <View style={styles.homeScreenContainer}>
      {images.length === 0 && (
        <Text
          style={{
            ...styles.homeScreenTextStyle,
            alignSelf: 'center',
          }}>
          업로드한 사진이 없습니다.
        </Text>
      )}
      {images.length > 0 && (
        <View style={{flex: 1}}>
          <Text style={{...styles.homeScreenTextStyle, marginBottom: 8}}>
            Today
          </Text>
          <FlatList
            contentContainerStyle={styles.imageListContainerStyle}
            data={images}
            renderItem={({item}: {item: ImageType}) => (
              <Pressable onPress={() => {}}>
                <Image
                  source={{uri: item.path}}
                  width={(deviceWidth - 32) / 3}
                  height={(deviceWidth - 32) / 3}
                />
              </Pressable>
            )}
            keyExtractor={item => item.creationDate!}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    backgroundColor: colors.darkGray,
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  homeScreenTextStyle: {
    color: colors.lightGray,
    fontSize: 16,
  },
  imageListContainerStyle: {
    flexDirection: 'row',
    flexWrap: 1,
  },
});
