import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigator';

const useNavigator = () => {
  const stackNavigation = useNavigation<NavigationProp<RootStackParamList>>();

  return stackNavigation;
};

export default useNavigator;
