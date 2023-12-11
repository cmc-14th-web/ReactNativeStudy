import {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {theme} from 'styles/theme';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleChangeSearchText = (inputText: string) => {
    if (!inputText.length) {
      console.log(inputText);
      setSearchText(inputText);
    }
  };

  return (
    <TextInput
      placeholder="Youtube 검색"
      placeholderTextColor={theme.palette.gray_600}
      style={searchBarStyles.container}
      value={searchText}
      onChangeText={handleChangeSearchText}
    />
  );
};

export default SearchBar;

const searchBarStyles = StyleSheet.create({
  container: {
    height: 32,
    backgroundColor: theme.palette.gray_800,
    borderRadius: 20,
    paddingLeft: 14,
    paddingRight: 12,
    paddingVertical: 6,
    flex: 1,
    color: theme.palette.white,
  },
});
