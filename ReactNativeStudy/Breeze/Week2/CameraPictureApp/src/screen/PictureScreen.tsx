import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useRecoilValue} from 'recoil';

import ImageItem from '../components/ImageItem';
import {pictureState} from '../recoil/atom';
import {palette} from '../styles/ColorPalette';
import {RootStackParamList} from '../type/rootStack';

type PictureScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Picture'
>;

interface PictureScreenProps {
  navigation: PictureScreenNavigationProp;
}

function PictureScreen({navigation}: PictureScreenProps) {
  const pictures = useRecoilValue(pictureState);

  const gobackDetail = (img: string) => {
    navigation.navigate('Detail', {img});
  };
  const renderImageItem = ({item}: {item: string}) => (
    <ImageItem image={item} onPress={() => gobackDetail(item)} />
  );

  return (
    <View>
      {pictures.length === 0 && (
        <View style={styles.wrapper}>
          <Text style={styles.text}>아직 업로드된 사진이 없습니다.</Text>
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
export default PictureScreen;
