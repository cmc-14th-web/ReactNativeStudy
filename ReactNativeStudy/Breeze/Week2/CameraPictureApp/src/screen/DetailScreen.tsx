import {RouteProp} from '@react-navigation/native';
import {View, Image, StyleSheet} from 'react-native';
import {RootStackParamList} from '../type/navigator';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

interface DetailScreenProps {
  route: DetailScreenRouteProp;
}

function DetailScreen({route}: DetailScreenProps) {
  const {img} = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `data:image/jpeg;base64,${img}`}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
export default DetailScreen;
