import {useNavigation} from '@react-navigation/native';

const useNavigator = () => {
  const stackNavigation = useNavigation();
  const tabNavigation = useNavigation();

  return {stackNavigation, tabNavigation};
};

export default useNavigator;
