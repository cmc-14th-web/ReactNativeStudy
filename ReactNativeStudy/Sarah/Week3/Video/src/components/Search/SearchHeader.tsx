import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import BackButton from '../common/BackButton';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {hasSearchState, keywordState} from '../../recoil/keywordAtom';
import {COLOR} from '../../constants/color';

const SearchHeader = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const setHasSearched = useSetRecoilState(hasSearchState);
  const handleKeyword = (text: string) => {
    setKeyword(text);
  };

  const handleSearchSubmit = () => {
    setHasSearched(true);
  };

  return (
    <View style={style.container}>
      <BackButton />
      <TextInput
        placeholder="Youtube 검색"
        placeholderTextColor={COLOR.GRAY_600}
        style={style.input}
        value={keyword}
        onChangeText={handleKeyword}
        returnKeyType="search"
        onSubmitEditing={handleSearchSubmit}
      />
    </View>
  );
};

export default SearchHeader;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLOR.GRAY_900,
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: COLOR.GRAY_800,
    color: COLOR.WHITE,
    width: 329,
    paddingVertical: 6,
    paddingLeft: 14,
    marginLeft: 24,
    borderRadius: 20,
  },
});
