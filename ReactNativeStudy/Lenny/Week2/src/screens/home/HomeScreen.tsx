import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/colors';
import {useStore} from '../../store/store';
import {SelectedImageDataType} from '../../types/ImageType';
import {deviceWidth} from '../../constants/device';

export default function HomeScreen({navigation}: any) {
  const {images, setSavedDate} = useStore();

  const updateDetailImageData = (creationDate: Date) => {
    const imageCreationDate = creationDate;
    const yearMonthDay = imageCreationDate
      .toISOString()
      .split('T')[0]
      .replaceAll('-', '.');

    // 00~09시 일 때 getHours()를 하게 되면 1자리만 가져오게 됨
    // 따라서 해당 1자리가 아닌 2자리를 만들어주는 로직, 시간과 분 모두 해당
    const hour = imageCreationDate.getHours();
    const hourToString = hour / 10 < 1 ? `0${hour}` : hour;
    const minute = imageCreationDate.getMinutes();
    const minuteToString = minute / 10 < 1 ? `0${minute}` : minute;

    setSavedDate(`${yearMonthDay} ${hourToString}:${minuteToString}`);
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
            renderItem={({item}: {item: SelectedImageDataType}) => {
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
