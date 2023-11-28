import React from 'react';
import Home from '../assets/icons/home.svg';
import Add from '../assets/icons/add.svg';
import CompleteTodo from '../assets/icons/complete-todo.svg';
import IncompleteTodo from '../assets/icons/incomplete-todo.svg';
import Delete from '../assets/icons/delete.svg';
import Setting from '../assets/icons/setting.svg';
import colors from '../styles/color';

export const HomeSVG = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => <Home width={24} height={24} color={focused ? color : colors.darkGray} />;

export const AddSVG = ({focused, color}: {focused: boolean; color: string}) => (
  <Add width={24} height={24} color={focused ? color : colors.darkGray} />
);

export const CompleteTodoSVG = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <CompleteTodo
    width={24}
    height={24}
    color={focused ? color : colors.darkGray}
  />
);

export const IncompleteTodoSVG = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <IncompleteTodo
    width={24}
    height={24}
    color={focused ? color : colors.darkGray}
  />
);

export const DeleteSVG = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Delete width={24} height={24} color={focused ? color : colors.darkGray} />
);

export const SettingSVG = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Setting width={24} height={24} color={focused ? color : colors.darkGray} />
);
