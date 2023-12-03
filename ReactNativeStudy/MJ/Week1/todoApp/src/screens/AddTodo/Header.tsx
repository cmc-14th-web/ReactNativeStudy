import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconFactory from '../../components/IconFactory';
import palette, {KeyofPalette} from '../../styles/palette';
import {RootStackParamList} from '../../types/type';

interface AddTodoHeaderProps {
  color: KeyofPalette;
  stackNavigation: NavigationProp<RootStackParamList>;
  handleComplete: () => void;
}

export const AddTodoHeader = ({
  color,
  stackNavigation,
  handleComplete,
}: AddTodoHeaderProps) => {
  return (
    <View style={styles.Header}>
      <TouchableOpacity onPress={() => stackNavigation.navigate('Home')}>
        <IconFactory icon="ArrowBack" fill={palette[color]} />
      </TouchableOpacity>
      <View>
        <Text style={{color: palette[color]}}>할 일을 추가해주세요!</Text>
      </View>
      <TouchableOpacity onPress={handleComplete}>
        <Text style={{color: palette[color]}}>완료!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});
