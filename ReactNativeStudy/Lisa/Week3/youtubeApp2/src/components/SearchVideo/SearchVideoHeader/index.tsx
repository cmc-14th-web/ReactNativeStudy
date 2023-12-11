import SvgIcons from 'assets/icons/SvgIcons';
import SearchBar from 'components/atoms/SearchBar';
import {BottomTabMenu} from 'constants/menu';
import {useNavigator} from 'libs/hooks/useNavigator';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {theme} from 'styles/theme';

const SearchVideoHeader = () => {
  const {tabNavigation} = useNavigator();

  const handlePressBackIcon = () => {
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
