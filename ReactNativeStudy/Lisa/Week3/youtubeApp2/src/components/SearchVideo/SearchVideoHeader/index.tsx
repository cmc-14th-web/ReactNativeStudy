import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useStore} from 'zustand';

import {BottomTabMenu} from 'constants/menu';
import {useNavigator} from 'libs/hooks/useNavigator';
import {searchTextStore} from 'libs/store/searchText';
import {theme} from 'styles/theme';
import SvgIcons from 'assets/icons/SvgIcons';
import SearchBar from 'components/atoms/SearchBar';

const SearchVideoHeader = () => {
  const {tabNavigation} = useNavigator();
  const {setSearchText, setIsSearchFinished} = useStore(searchTextStore);

  const handlePressBackIcon = () => {
    setSearchText('');
    setIsSearchFinished(false);
    tabNavigation.navigate(BottomTabMenu.Home);
  };

  return (
    <View style={searchVideoHeaderStyles.container}>
      <TouchableOpacity onPress={handlePressBackIcon}>
        <SvgIcons.ArrowBackIcon />
      </TouchableOpacity>
      <SearchBar />
    </View>
  );
};

export default SearchVideoHeader;

const searchVideoHeaderStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 48,
    backgroundColor: theme.palette.gray_900,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
  },
});
