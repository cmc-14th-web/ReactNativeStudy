import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import colorState from '../store/color';
import palette from '../styles/palette';

interface HeaderProps {
  title?: string;
  children?: ReactNode;
}

const Header = ({title, children}: HeaderProps) => {
  const color = useRecoilValue(colorState);
  return (
    <View style={{...styles.Header}}>
      <View style={{width: 50}}>{children}</View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            ...styles.HeadearTitle,
            color: palette[color],
          }}>
          {title}
        </Text>
      </View>
      <View style={{width: 50}} />
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
    height: 50,
  },
  HeadearTitle: {
    fontSize: 26,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

export default Header;
