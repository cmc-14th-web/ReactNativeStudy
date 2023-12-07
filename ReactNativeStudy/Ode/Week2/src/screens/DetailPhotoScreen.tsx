import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {SCREEN_WIDTH} from '@gorhom/bottom-sheet';

export default function DetailPhotoScreen({
  navigation: {setOptions},
  route: {params: images},
}: any) {
  useEffect(() => {
    setOptions({
      title: images.creationDate,
    });
  }, [images, setOptions]);

  console.log('params', images);
  return (
    <View>
      <Image
        source={{uri: images.path}}
        width={SCREEN_WIDTH}
        height={SCREEN_WIDTH}
      />
    </View>
  );
}
