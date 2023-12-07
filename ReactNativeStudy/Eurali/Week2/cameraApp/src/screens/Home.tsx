import React from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import colors from '../styles/colors';
import useStore, {imageType} from '../store';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}: {navigation: any}) => {
  const images = useStore(state => state.images);
  const setcurImageInfo = useStore(state => state.setCurImageInfo);

  const imageSetPadding = 10;
  const windowWidth = Dimensions.get('window').width - imageSetPadding * 2;

  const renderItem = ({item}: {item: imageType}) => (
    <TouchableOpacity
      onPress={() => {
        setcurImageInfo(item);
        navigation.navigate('DetailImage');
      }}>
      <Image
        source={{uri: item.path}}
        style={{width: windowWidth / 3, height: windowWidth / 3}}
      />
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: colors.DeepDarkGrey,
        padding: imageSetPadding,
      }}>
      {images.length > 0 && (
        <Text style={{color: colors.lightGrey}}>Today</Text>
      )}
      {images.length === 0 && (
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: colors.lightGrey,
            }}>
            업로드한 사진이 없습니다.
          </Text>
        </View>
      )}
      <FlatList data={images} renderItem={renderItem} numColumns={3} />
    </View>
  );
};

export default Home;
