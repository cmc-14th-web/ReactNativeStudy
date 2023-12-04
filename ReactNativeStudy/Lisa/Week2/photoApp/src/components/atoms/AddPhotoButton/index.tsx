import SvgIcons from 'assets/icons/SvgIcons';
import useNavigator from 'libs/hooks/useNavigator';
import {TouchableOpacity} from 'react-native';

const AddPhotoButton = () => {
  const {stackNavigation} = useNavigator();

  return (
    <TouchableOpacity
      onPress={() => stackNavigation.navigate('AddPhoto')}
      style={{
        bottom: 37,
      }}>
      <SvgIcons.AddIcon fill={'pink'} />
    </TouchableOpacity>
  );
};

export default AddPhotoButton;
