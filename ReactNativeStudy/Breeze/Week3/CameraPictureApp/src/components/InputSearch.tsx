import {Pressable, StyleSheet, TextInput, View} from 'react-native';

import {palette} from '../styles/ColorPalette';
import Icon from '../assets/Icon';
import {useRecoilState} from 'recoil';
import {searchState} from '../recoil/atom';

interface InputSearchProps {
  handleSearch: () => void;
}
function InputSearch({handleSearch}: InputSearchProps) {
  const [search, setSearch] = useRecoilState(searchState);
  const handleClearInput = () => {
    setSearch('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Youtube 검색"
          placeholderTextColor={palette.gray[600]}
          value={search}
          onChangeText={(text: string) => setSearch(text)}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
      </View>
      {search && (
        <Pressable style={styles.icon} onPress={handleClearInput}>
          <Icon icon="Close" fill={palette.white} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: palette.gray[800],
    borderRadius: 20,
    width: '90%',
  },
  wrapper: {
    //flex: 1,
  },
  input: {
    color: palette.white,
    paddingLeft: 14,
    paddingVertical: 6,
    height: 40,
  },
  icon: {
    paddingTop: 7,
    paddingRight: 5,
  },
});
export default InputSearch;
