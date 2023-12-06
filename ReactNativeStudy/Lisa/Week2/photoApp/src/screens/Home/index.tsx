import {StackMenu} from 'constants/navigator/menu';
import useNavigator from 'libs/hooks/useNavigator';
import {imageStore} from 'libs/store/images';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {theme} from 'styles/theme';
import {typoStyles} from 'styles/typo';
import {getScreenSize} from 'utils/getScreenSize';

const Home = () => {
  const {images} = imageStore();
  const {screenWidth} = getScreenSize();
  const imageSize = (screenWidth - 32) / 3;
  const {stackNavigation} = useNavigator();

  const handlePressImage = (imagePath: string, imageDate: string) => {
    stackNavigation.navigate(StackMenu.PhotoDetail, {
      path: imagePath,
      date: imageDate,
    });
  };

  return (
    <View>
      {images.length ? (
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
      ) : (
        <View style={noImageContainerStyles.container}>
          <Text style={noImageContainerStyles.text}>
            업로드한 사진이 없습니다.
          </Text>
        </View>
      )}
    </View>
  );
};

export default Home;

const noImageContainerStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    color: theme.palette.gray_400,
    fontSize: typoStyles.typo.body_1.fontSize,
    fontWeight: typoStyles.typo.body_1.fontWeight,
  },
});

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
