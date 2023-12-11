import React from 'react';
import {Text} from 'react-native';
import palette from '../styles/palette';

interface TabBarTextFocusType {
  focused: boolean;
}

interface TabBarextProps extends TabBarTextFocusType {
  name: string;
}

const CommonTabBarText = ({focused, name}: TabBarextProps) => (
  <Text
    style={{
      color: focused ? palette.Red : palette.Gray600,
      fontSize: 12,
    }}>
    {name}
  </Text>
);

const TabBarTexts = {
  HomeText: ({focused}: TabBarTextFocusType) => (
    <CommonTabBarText focused={focused} name="홈" />
  ),
  SettingText: ({focused}: TabBarTextFocusType) => (
    <CommonTabBarText focused={focused} name="설정" />
  ),
};

export default TabBarTexts;
