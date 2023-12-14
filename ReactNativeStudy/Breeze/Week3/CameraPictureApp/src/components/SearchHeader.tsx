import {Pressable, StyleSheet, View} from 'react-native';
import {useSetRecoilState} from 'recoil';

import Icon from '../assets/Icon';
import InputSearch from './InputSearch';
import useNavigator from '../hooks/useNavigator';
import {palette} from '../styles/ColorPalette';
import {searchState} from '../recoil/atom';

function SearchHeader() {
  const {stackNavigation, tabNavigation} = useNavigator();
  const setSearch = useSetRecoilState(searchState);
  // 검색 후 홈 페이지로 이동
  const handleMoveSearchHome = () => {
    stackNavigation.navigate('SearchHome');
  };
  const handleMoveHome = () => {
    tabNavigation.navigate('Home');
    setSearch('');
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={handleMoveHome}>
        <Icon icon="ArrowBack" fill={palette.white} style={styles.icon} />
      </Pressable>
      <InputSearch handleSearch={handleMoveSearchHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginTop: 7,
  },
});
export default SearchHeader;
