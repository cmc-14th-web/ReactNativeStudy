import React from 'react';
import {TouchableOpacity} from 'react-native';
import ArrowBack from '../../assets/arrow-back.svg';
import {useNavigation} from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
      <ArrowBack />
    </TouchableOpacity>
  );
}
