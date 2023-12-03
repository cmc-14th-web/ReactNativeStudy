import {NavigationProp, useNavigation} from '@react-navigation/native';

import {RootStackParamList} from 'navigator/StackNavigator';

const useNavigator = () => {
  const stackNavigation = useNavigation<NavigationProp<RootStackParamList>>();

  return {stackNavigation};
};

export default useNavigator;
