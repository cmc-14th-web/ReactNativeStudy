import {ParamListBase, RouteProp} from '@react-navigation/native';

export type StackScreenName = keyof RootStackParamList;
export type BottomTabScreenName = keyof BottomTabParamList;

export type RootStackParamList = {
  BottomTabNavigator: undefined;
  SearchVideo: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Setting: undefined;
};

export type RoutePropsType = {
  route: RouteProp<ParamListBase, StackScreenName | BottomTabScreenName>;
};
