import {NavigationProp, useNavigation} from '@react-navigation/native';

import {HomeStackParamList} from '../navigation/HomeStackNavigation';
import {BottomTabParamList} from '../navigation/BottomTabNavigation';

export const useNavigator = () => {
  const bottomTabNavigator =
    useNavigation<NavigationProp<BottomTabParamList>>();
  const stackNavigator = useNavigation<NavigationProp<HomeStackParamList>>();

  return {bottomTabNavigator, stackNavigator};
};
