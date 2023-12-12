import React, {useState} from 'react';
import {Keyboard, Pressable, StyleSheet, TextInput, View} from 'react-native';
import SvgIcons from '../SvgIcons';
import useNavigator from '../../hooks/useNavigator';
import palette from '../../styles/palette';

export default function Header() {
  const [searchContent, setSearchContent] = useState<string>('');
  const stackNavigation = useNavigator();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => stackNavigation.goBack()}>
        <SvgIcons.BackIcon />
      </Pressable>
      <View style={styles.contentWrapStyle}>
        <TextInput
          value={searchContent}
          onChangeText={e => setSearchContent(e)}
          placeholder="Youtube 검색"
          placeholderTextColor={palette.Gray600}
          returnKeyType="search"
          enablesReturnKeyAutomatically
          onSubmitEditing={() => {}}
          style={styles.contentStyle}
        />
        <Pressable
          style={
            !searchContent ? styles.hideCancelStyle : styles.showCancelStyle
          }
          onPress={() => {
            setSearchContent('');
            Keyboard.dismiss();
          }}>
          <SvgIcons.CancelIcon />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  contentWrapStyle: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: palette.Gray800,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentStyle: {
    width: '90%',
    color: palette.White,
  },
  showCancelStyle: {
    display: 'flex',
  },
  hideCancelStyle: {
    display: 'none',
  },
});
