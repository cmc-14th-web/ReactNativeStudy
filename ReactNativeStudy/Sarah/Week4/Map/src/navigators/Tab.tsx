import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Starred from '../screens/Starred';

type TabParams = {
  Home: undefined;
  Starred: undefined;
};

const TabNavigation = () => {
  const Tab = createBottomTabNavigator<TabParams>();
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        component={Starred}
        name="Starred"
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
