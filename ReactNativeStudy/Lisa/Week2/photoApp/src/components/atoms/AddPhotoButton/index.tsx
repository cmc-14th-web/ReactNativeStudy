import SvgIcons from 'assets/icons/SvgIcons';
import useNavigator from 'libs/hooks/useNavigator';
import {TouchableOpacity} from 'react-native';

const AddPhotoButton = () => {
  const {tabNavigation} = useNavigator();

  return (
    <TouchableOpacity
      onPress={() => tabNavigation.navigate('AddPhoto')}
      style={{
        bottom: 37,
      }}>
      <SvgIcons.AddIcon fill={'gradient_100'} />
    </TouchableOpacity>
  );
};

export default AddPhotoButton;
