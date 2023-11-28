import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import ScreenLayout from '../layout/screenLayout';
import Check from '../assets/check.svg';
import Trash from '../assets/trash.svg';
import Circle from '../assets/circle.svg';
import { itemComplete } from '../store/itemSlice';

const ItemBox = ({title, completed}: {title: string; completed: boolean}) => {
  const mainColor = useSelector((state: RootState) => state.color.mainColor);

  const dispatch = useDispatch();
  const handlePressChecked = () => {
    dispatch(itemComplete({title: title, completed: false}));
  };
  const handlePressCircle = () => {
    dispatch(itemComplete({title: title, completed: true}));
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
            <Circle />
          </TouchableOpacity>
        )}
        <Text style={{color: completed ? 'white' : mainColor}}>{title}</Text>
      </View>
      <Trash color={completed ? 'white' : mainColor} />
    </View>
  );
};

const Home = () => {
  const items = useSelector((state: RootState) => state.item.todoItems);
  return (
    <ScreenLayout>
      <View style={{gap: 16}}>
        <ItemBox title="example" completed={true} />
        <ItemBox title="example" completed={false} />
        {items &&
          items.map(item => (
            <ItemBox title={item.title} completed={item.completed} />
          ))}
      </View>
    </ScreenLayout>
  );
};

export default Home;
