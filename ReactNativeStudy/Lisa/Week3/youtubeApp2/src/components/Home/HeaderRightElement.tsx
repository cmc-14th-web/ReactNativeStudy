import {TouchableOpacity} from 'react-native';

import SvgIcons from 'assets/icons/SvgIcons';
import {StackMenu} from 'constants/menu';
import {useNavigator} from 'libs/hooks/useNavigator';

const HeaderRightElement = () => {
  const {stackNavigation} = useNavigator();

  const handlePressSearchIcon = () => {
    stackNavigation.navigate(StackMenu.SearchVideo);
  };

  return (
    <TouchableOpacity onPress={handlePressSearchIcon}>
      <SvgIcons.SearchIcon />
    </TouchableOpacity>
  );
};

export default HeaderRightElement;
