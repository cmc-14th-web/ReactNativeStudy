import {NavigationProp, useNavigation} from '@react-navigation/native';
import {BottomTabParamList, RootStackParamList} from 'types/navigator';

export const useNavigator = () => {
  const stackNavigation = useNavigation<NavigationProp<RootStackParamList>>();
  const tabNavigation = useNavigation<NavigationProp<BottomTabParamList>>();

  return {stackNavigation, tabNavigation};
};
