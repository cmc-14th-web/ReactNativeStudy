import {StyleSheet, TouchableOpacity} from 'react-native';

import SvgIcons from 'assets/icons/SvgIcons';
import useNavigator from 'libs/hooks/useNavigator';
import {TabMenu} from 'constants/navigator/menu';

const AddPhotoButton = () => {
  const {tabNavigation} = useNavigator();

  const handlePressAddPhotoButton = () => {
    tabNavigation.navigate(TabMenu.AddPhoto);
  };

  return (
    <TouchableOpacity
      onPress={handlePressAddPhotoButton}
      style={addPhotoButtonStyles.button}>
      <SvgIcons.AddIcon fill={'gradient_100'} />
    </TouchableOpacity>
  );
};

export default AddPhotoButton;

const addPhotoButtonStyles = StyleSheet.create({
  button: {
    bottom: 37,
  },
});
