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
import {ImageDataType} from '../../types/ImageType';

export default function HomeScreen({navigation}: any) {
  const {images, setSavedDate} = useStore();
  const {width: deviceWidth} = Dimensions.get('window');

  const updateDetailImageData = (creationDate: Date) => {
    const imageCreationDate = creationDate;
    const yearMonthDay = imageCreationDate
      .toISOString()
      .split('T')[0]
      .replaceAll('-', '.');
    const hour = imageCreationDate.getHours();
    const minute = imageCreationDate.getMinutes();

    setSavedDate(`${yearMonthDay} ${hour}:${minute}`);
  };

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
            renderItem={({item}: {item: ImageDataType}) => {
              return (
                <Pressable
                  onPress={() => {
                    updateDetailImageData(item.creationDate);
                    navigation.navigate({
                      name: 'DetailImage',
                      params: {
                        path: item.path,
                      },
                    });
                  }}>
                  <Image
                    source={{uri: item.path}}
                    width={(deviceWidth - 32) / 3}
                    height={(deviceWidth - 32) / 3}
                  />
                </Pressable>
              );
            }}
            keyExtractor={item => item.creationDate.toISOString()}
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
