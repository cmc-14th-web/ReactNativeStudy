import React, {useState, useCallback} from 'react';
import {Text, View} from 'react-native';
import BottomSheet from '../components/BottomSheet';
import {useFocusEffect} from '@react-navigation/native';

function AddPictureScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setModalVisible(true);
      return () => setModalVisible(false);
    }, []),
  );

  return (
    <View style={{flex: 1}}>
      <Text>사진 추가페이지</Text>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

export default AddPictureScreen;
