import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import useImagesStorage from '../hooks/useImagesStorage';
import {Image as ImageType} from '../types/image';

export default function HomeScreen({navigation}: {navigation: any}) {
  const {images} = useImagesStorage();

  return (
    <SafeAreaView>
      {(() => {
        if (images.length === 0) {
          return <Text>업로드한 사진이 없습니다.</Text>;
        }
        return (
          <>
            <Text>Today</Text>
            <FlatList
              data={images}
              numColumns={3}
              renderItem={({item: image}: {item: ImageType}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DetailPictureScreen', {params: image})
                  }>
                  <Image source={{uri: image.url}} />
                </TouchableOpacity>
              )}
            />
          </>
        );
      })()}
    </SafeAreaView>
  );
}
