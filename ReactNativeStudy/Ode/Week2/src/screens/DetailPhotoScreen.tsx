import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {SCREEN_WIDTH} from '@gorhom/bottom-sheet';

export default function DetailPhotoScreen({
  navigation: {setOptions},
  route: {params},
}: any) {
  const {params: image} = params;
  useEffect(() => {
    setOptions({
      title: image.creationDate,
    });
  }, [image, setOptions]);

  return (
    <View>
      <Image
        source={{uri: image.path}}
        width={SCREEN_WIDTH}
        height={SCREEN_WIDTH}
      />
    </View>
  );
}
