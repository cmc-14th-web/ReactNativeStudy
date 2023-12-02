import React, {useEffect} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import ScreenLayout from '../layout/screenLayout';
import Check from '../assets/check.svg';
import Trash from '../assets/trash.svg';
import Circle from '../assets/circle.svg';
import {itemComplete, itemDelete} from '../store/itemSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colorChange} from '../store/colorSlice';

const ItemBox = ({title, completed}: {title: string; completed: boolean}) => {
  const mainColor = useSelector((state: RootState) => state.color.mainColor);

  const dispatch = useDispatch();
  const handlePressChecked = () => {
    dispatch(itemComplete({title: title, completed: false}));
  };
  const handlePressCircle = () => {
    dispatch(itemComplete({title: title, completed: true}));
  };
  const handleDelete = () => {
    Alert.alert('정말 삭제하시겠습니끼?', '', [
      {
        text: '취소',
      },
      {
        text: '확인',
        onPress: () => {
          dispatch(itemDelete({title: title}));
        },
      },
    ]);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: completed ? mainColor : 'white',
        borderRadius: 20,
        paddingVertical: 16,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        {completed ? (
          <TouchableOpacity onPress={handlePressChecked}>
            <Check color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handlePressCircle}>
            <Circle color={mainColor} />
          </TouchableOpacity>
        )}
        <Text style={{color: completed ? 'white' : 'black'}}>{title}</Text>
      </View>
      <TouchableOpacity onPress={handleDelete}>
        <Trash color={completed ? 'white' : mainColor} />
      </TouchableOpacity>
    </View>
  );
};

const Home = () => {
  const items = useSelector((state: RootState) => state.item.todoItems);
  const dispatch = useDispatch();
  useEffect(() => {
    const getColor = async () => {
      try {
        let storageColor = await AsyncStorage.getItem('color');
        if (storageColor) {
          dispatch(colorChange(JSON.parse(storageColor)));
        }
      } catch (error) {
        console.error('Error fetching color from AsyncStorage:', error);
      }
    };

    getColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScreenLayout>
      <View style={{gap: 16}}>
        {items &&
          items.map(item => (
            <ItemBox
              key={item.title}
              title={item.title}
              completed={item.completed}
            />
          ))}
      </View>
    </ScreenLayout>
  );
};

export default Home;
