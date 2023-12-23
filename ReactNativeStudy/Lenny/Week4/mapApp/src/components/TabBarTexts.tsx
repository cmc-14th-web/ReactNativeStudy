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
      color: focused ? palette.Blue600 : palette.Gray600,
      fontSize: 12,
    }}>
    {name}
  </Text>
);

const TabBarTexts = {
  HomeText: ({focused}: TabBarTextFocusType) => (
    <CommonTabBarText focused={focused} name="홈" />
  ),
  StarText: ({focused}: TabBarTextFocusType) => (
    <CommonTabBarText focused={focused} name="즐겨찾기" />
  ),
};

export default TabBarTexts;
