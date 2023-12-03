import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';
import ThemeColors from '../components/ThemeColors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = () => {
  const changeTheme = async (selectedTheme: string) => {
    try {
      await AsyncStorage.setItem('selectedTheme', selectedTheme);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Header title="설정" hasButton={false} />
      <H1>색상을 선택해주세요.</H1>
      <ThemeColors changeTheme={changeTheme} />
    </Container>
  );
};

export default Setting;

const Container = styled.View`
  flex: 1;
`;

const H1 = styled.Text`
  margin-left: 32px;
  margin-top: 16px;
`;
