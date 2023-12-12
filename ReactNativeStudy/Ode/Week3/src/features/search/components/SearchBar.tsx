import React, {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import Colors from '../../../styles/colors';
import useSearchTextStorage from '../hooks/useSearchText';
import SvgIcon from '../../../components/SvgIcon';

export default function SearchBar() {
  const {onSearch} = useSearchTextStorage();

  const [text, setText] = useState<string>('');

  const handleSubmit = () => {
    onSearch(text);
  };

  const handleReset = () => setText('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchbar}
        placeholderTextColor={Colors.Gray.a600}
        placeholder="Youtube 검색"
        returnKeyLabel="검색"
        returnKeyType="search"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
      />
      {text !== '' && (
        <TouchableOpacity onPress={handleReset}>
          <SvgIcon icon="Close" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 32,
    backgroundColor: Colors.Gray.a800,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  searchbar: {
    fontSize: 14,
    maxWidth: '80%',
    overflow: 'scroll',
    color: Colors.White,
  },
});
