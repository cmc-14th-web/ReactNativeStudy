import {RouteProp} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../types/navigator';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

interface DetailScreenProps {
  route: DetailScreenRouteProp;
}

function DetailScreen({route}: DetailScreenProps) {
  const {id} = route.params;
  return (
    <View>
      <Text>동영상 실행하는 페이지</Text>
    </View>
  );
}
export default DetailScreen;
