import React from 'react';
import Container from '../components/Container';
import {Text} from 'react-native';
import Colors from '../styles/colors';

export default function BookmarksScreen() {
  return (
    <Container>
      <Text style={{color: Colors.White}}>북마크</Text>
    </Container>
  );
}
