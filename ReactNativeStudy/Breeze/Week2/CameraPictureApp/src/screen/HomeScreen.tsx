import {StyleSheet, View} from 'react-native';
import {palette} from '../styles/ColorPalette';
import {useRecoilValue} from 'recoil';
import {pictureState} from '../recoil/atom';
import ImageItem from '../components/ImageItem';
import {Text} from 'react-native-svg';
import {FlatList} from 'react-native-gesture-handler';
import useNavigator from '../hook/useNavigator';

function HomeScreen() {
  const pictures = useRecoilValue(pictureState);
  const {stackNavigation} = useNavigator();

  const gobackDetail = (img: string) => {
    stackNavigation.navigate('Detail', {img});
  };
  const renderImageItem = ({item}: {item: string}) => (
    <ImageItem image={item} onPress={() => gobackDetail(item)} />
  );

  return (
    <View>
      {pictures.length === 0 && (
        <View style={styles.wrapper}>
          <Text>아직 업로드된 사진이 없습니다.</Text>
        </View>
      )}
      <FlatList
        data={pictures}
        renderItem={renderImageItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: palette.gray[400],
  },
});

export default HomeScreen;
