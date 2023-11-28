import React from 'react';
import {TouchableOpacity} from 'react-native';
import ArrowBack from '../../assets/icons/arrow-back.svg';
import {useStore} from '../../store/store';
import {useNavigation} from '@react-navigation/native';

export default function BackButton() {
  const {color} = useStore();
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
      <ArrowBack width={24} height={24} color={color} />
    </TouchableOpacity>
  );
}
