import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import SvgIcon from '../../../components/SvgIcon';
import {ScreenNavigationProp} from '../../../navigators/types';

export default function SearchButton() {
  const navigation = useNavigation<ScreenNavigationProp<'SearchScreen'>>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
      <SvgIcon icon={'Search'} />
    </TouchableOpacity>
  );
}
