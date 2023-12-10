import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SvgIcon from './SvgIcon';
import {useNavigation} from '@react-navigation/native';

export default function SearchButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
      <SvgIcon icon={'Search'} />
    </TouchableOpacity>
  );
}
