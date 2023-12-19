import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '../../types';
import Icon from '../common/SvgIcon';

const SearchButton = () => {
  const navigation = useNavigation<StackNavigationProp>();

  const handleNavigate = () => {
    navigation.navigate('Search');
  };

  return (
    <TouchableOpacity onPress={handleNavigate}>
      <Icon name="search" size={24} />
    </TouchableOpacity>
  );
};

export default SearchButton;
