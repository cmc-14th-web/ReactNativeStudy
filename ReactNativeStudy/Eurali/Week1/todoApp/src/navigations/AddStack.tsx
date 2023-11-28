import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Alert, Text, TouchableOpacity} from 'react-native';
import BackArrow from '../assets/arrow-back.svg';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import Add from '../screens/Add';
import {useNavigation} from '@react-navigation/native';
import {itemAdd} from '../store/itemSlice';
import {textChange} from '../store/textSlice';

const Stack = createStackNavigator();

const AddStackNavigation = () => {
  const mainColor = useSelector((state: RootState) => {
    return state.color.mainColor;
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const text = useSelector((state: RootState) => state.text.text);

  const handlePressBack = () => {
    navigation.goBack();
  };
  const handlePressCompelete = () => {
    dispatch(itemAdd({title: text, completed: false}));
    dispatch(textChange(''));
    Alert.alert('할일이 추가되었습니다!', '', [{text: '확인'}]);
    //handlePressBack();
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Add"
        component={Add}
        options={{
          title: '할일을 추가해주세요!',
          headerStyle: {
            backgroundColor: 'var(--Gray, #F5F5F5)',
          },
          headerTintColor: mainColor,
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 16,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={handlePressBack}
              style={{marginLeft: 20}}>
              <BackArrow color={mainColor} style={{marginLeft: 20}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={handlePressCompelete}
              style={{marginRight: 20}}>
              <Text style={{color: mainColor}}> 완료 </Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AddStackNavigation;
