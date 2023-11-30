import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon_back from '../assets/icon_back.svg';

export type HeaderProps = {
  title: string;
  hasButton?: boolean;
  onBackPress?: () => void;
  onCompletePress?: () => void;
};

const Header = ({
  title,
  hasButton,
  onBackPress,
  onCompletePress,
}: HeaderProps) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: hasButton ? 'space-between' : 'center',
          alignItems: 'center',
        }}>
        {hasButton && (
          <TouchableOpacity onPress={onBackPress}>
            <Icon_back width="18" height="18" />
          </TouchableOpacity>
        )}
        <Text>{title}</Text>
        {hasButton && (
          <TouchableOpacity onPress={onCompletePress}>
            <Text>완료</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
