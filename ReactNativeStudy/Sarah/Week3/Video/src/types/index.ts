import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';

export type TabParamList = {
  Home: undefined;
  Setting: undefined;
};

export type StackParamList = {
  TabNavigation: TabParamList;
  Search: undefined;
  Video: undefined;
};

export type TabNavitationScreenParams = NavigatorScreenParams<TabParamList>;

export type StackNavigationProp = NativeStackNavigationProp<StackParamList>;
