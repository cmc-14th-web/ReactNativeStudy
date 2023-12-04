import React from 'react';
import HomeSvg from '../assets/home.svg';
import SettingSvg from '../assets/setting.svg';
import {colors} from '../styles/colors';

export const HomeTabIcon = ({focused}: {focused: boolean}) => {
  return <HomeSvg color={focused ? colors.gradient : colors.lightGray} />;
};

export const SettingTabIcon = ({focused}: {focused: boolean}) => {
  return <SettingSvg color={focused ? colors.gradient : colors.lightGray} />;
};
