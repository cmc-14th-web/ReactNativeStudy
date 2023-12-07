import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {Image as ImageType} from '../types/image';
import moment from 'moment';

type RootStackParamList = {
  image: ImageType;
};

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'image'>;

export default function DetailPhotoScreen({
  navigation: {setOptions},
  route: {params: image},
}: DetailScreenProps) {
  useEffect(() => {
    setOptions({
      title: moment(image.date).format('YYYY.MM.DD HH:mm'),
    });
  }, [image, setOptions]);

  return (
    <View>
      <Image source={{uri: image.url}} />
    </View>
  );
}
