import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackMenu} from '../constants/app/menu';

export type RootStackList = {
  BottomTabNavigator: undefined;
  AddTodo: undefined;
};

export type BottomTabNavigatorProps = NativeStackScreenProps<
  RootStackList,
  StackMenu.BottomTabNavigator
>;
