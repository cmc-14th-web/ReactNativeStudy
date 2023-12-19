import {StackNavigationProp} from '@react-navigation/stack';
import {Video} from '../../features/video/types/video';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  BottomTabNavigator: undefined;
  SearchScreen: undefined;
  VideoDetailScreen: {video: Video};
};

export type ScreenNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

export type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
