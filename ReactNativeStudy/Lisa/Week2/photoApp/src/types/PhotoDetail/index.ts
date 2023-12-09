import {RouteProp, NavigationProp} from '@react-navigation/native';

import {StackMenu} from 'constants/navigator/menu';
import {RootStackParamList} from 'types/navigator';

export type PhotoDetailRoutePropType = RouteProp<
  RootStackParamList,
  StackMenu.PhotoDetail
>;

export type PhotoDetailNavigationPropType = NavigationProp<RootStackParamList>;

export type PhotoDetailPropsType = {
  navigation: PhotoDetailNavigationPropType;
  route: PhotoDetailRoutePropType;
};
