import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import Header from '../components/Header';
import SvgIcons from '../components/SvgIcons';
import useNavigator from '../hooks/useNavigation';
import colorState from '../store/color';
import detailImageState from '../store/detailImage';

const Gallery: React.FC = () => {
  const color = useRecoilValue(colorState);
  const detailImage = useRecoilValue(detailImageState);
  const stackNavigation = useNavigator();
  function formatTimestamp(timestamp: number) {
    const milliseconds = timestamp * 1000;

    const date = new Date(milliseconds);

    const formattedDate = `${date.getFullYear()}.${padZero(
      date.getMonth() + 1,
    )}.${padZero(date.getDate())} ${padZero(date.getHours())}:${padZero(
      date.getMinutes(),
    )}`;

    return formattedDate;
  }

  // 숫자를 두 자리로 만들어주는 함수
  function padZero(number: number) {
    return number.toString().padStart(2, '0');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'column'}}>
        <Header
          title={formatTimestamp(parseInt(detailImage?.creationDate!, 10))}>
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => stackNavigation.goBack()}>
            <SvgIcons.ArrowBackIcon fill={color} />
          </TouchableOpacity>
        </Header>
        <View style={{marginTop: 10}}>
          <Image source={{uri: detailImage?.path}} width={450} height={450} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Gallery;
