import React from 'react';
import {View, Text} from 'react-native';
import ScreenLayout from '../layout/screenLayout';
import color from '../constants/color';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colorChange} from '../store/colorSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ColorPick = ({color}: {color: string}) => {
  const dispatch = useDispatch();
  const handlePress = async () => {
    dispatch(colorChange(color));
    await AsyncStorage.setItem('color', JSON.stringify(color));
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 100,
          backgroundColor: color,
        }}
      />
    </TouchableOpacity>
  );
};

const Set = () => {
  return (
    <ScreenLayout>
      <Text style={{fontSize: 15, fontWeight: '400'}}>
        색상을 선택해주세요.
      </Text>
      <View
        style={{
          marginTop: 16,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <ColorPick color={color.orange} />
        <ColorPick color={color.green} />
        <ColorPick color={color.blue} />
        <ColorPick color={color.purple} />
        <ColorPick color={color.red} />
      </View>
    </ScreenLayout>
  );
};

export default Set;
