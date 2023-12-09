import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

import {StackMenu} from 'constants/navigator/menu';
import useNavigator from 'libs/hooks/useNavigator';
import {getScreenSize} from 'utils/getScreenSize';
import {ImageType} from 'types/image';

const ImageListItem = ({images}: {images: ImageType[]}) => {
  const {stackNavigation} = useNavigator();
  const {screenWidth} = getScreenSize();
  const imageSize = (screenWidth - 32) / 3;

  const handlePressImage = (imagePath: string, imageDate: string) => {
    stackNavigation.navigate(StackMenu.PhotoDetail, {
      path: imagePath,
      date: imageDate,
    });
  };

  return (
    <View style={imageContainerStyles.container}>
      <Text style={imageContainerStyles.text}>Today</Text>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handlePressImage(item.path, item.date)}>
            <Image
              source={{uri: item.path}}
              width={imageSize}
              height={imageSize}
            />
          </TouchableOpacity>
        )}
        numColumns={3}
        style={imageContainerStyles.list}
      />
    </View>
  );
};

export default ImageListItem;

const imageContainerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 66,
    height: '100%',
  },
  text: {
    color: '#949494',
    paddingTop: 16,
    paddingBottom: 8,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
