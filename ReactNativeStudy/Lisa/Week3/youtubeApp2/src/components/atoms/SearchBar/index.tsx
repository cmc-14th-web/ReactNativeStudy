import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useStore} from 'zustand';

import {theme} from 'styles/theme';
import {searchTextStore} from 'libs/store/searchText';
import SvgIcons from 'assets/icons/SvgIcons';

const SearchBar = () => {
  const {searchText, setSearchText, setIsSearchFinished} =
    useStore(searchTextStore);

  const handleSubmitEditing = () => {
    searchText && setIsSearchFinished(true);
  };

  const handlePressCloseIcon = () => {
    setIsSearchFinished(false);
    setSearchText('');
  };

  return (
    <>
      <TextInput
        placeholder="Youtube 검색"
        placeholderTextColor={theme.palette.gray_600}
        value={searchText}
        onChangeText={setSearchText}
        returnKeyType="search"
        onSubmitEditing={handleSubmitEditing}
        style={searchBarStyles.container}
      />
      {searchText && (
        <TouchableOpacity
          onPress={handlePressCloseIcon}
          style={searchBarStyles.iconContainer}>
          <SvgIcons.CloseIcon />
        </TouchableOpacity>
      )}
    </>
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
  iconContainer: {
    position: 'absolute',
    right: 32,
  },
});
