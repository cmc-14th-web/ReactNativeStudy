import {RouteProp, useRoute} from '@react-navigation/native';

import {RootStackParamList, TabParamList} from 'types/navigator';

type ScreenName = keyof RootStackParamList;
type TabName = keyof TabParamList;

const useRouter = <T extends ScreenName, K extends TabName>() => {
  const stackRoute = useRoute<RouteProp<RootStackParamList, T>>();
  const tabRoute = useRoute<RouteProp<TabParamList, K>>();

  return {stackRoute, tabRoute};
};

export default useRouter;
