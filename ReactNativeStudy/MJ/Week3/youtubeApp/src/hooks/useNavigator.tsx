import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, RootTabParamList} from '../type';

export const useNavigator = () => {
  const stackNavigation = useNavigation<NavigationProp<RootStackParamList>>();
  const tabNavigation = useNavigation<NavigationProp<RootTabParamList>>();

  return {stackNavigation, tabNavigation};
};
