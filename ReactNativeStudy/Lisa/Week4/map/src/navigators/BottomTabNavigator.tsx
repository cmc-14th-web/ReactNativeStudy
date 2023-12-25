import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabParamList} from '../types/navigator';
import {tabMenu} from '../constants/navigatorMenu';
import Home from '../screens/Home';
import Setting from '../screens/Setting';

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={tabMenu.Home} component={Home} />
      <Tab.Screen name={tabMenu.Setting} component={Setting} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
