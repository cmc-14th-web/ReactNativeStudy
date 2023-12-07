import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomSheet from '../components/BottomSheet';
import {useFocusEffect} from '@react-navigation/native';
import Icon from '../components/Icon';
import Gallery from '../assets/Gallery';

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
        setModalVisible={setModalVisible}>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <Icon icon="Camera" fill="white" />
            <Text style={styles.text}>카메라로 촬영하기</Text>
          </View>
          <View style={styles.content}>
            <Gallery />
            <Text style={styles.text}>갤러리에서 선택하기</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: 35,
    marginLeft: 24,
    marginTop: 13,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginLeft: 8,
  },
});

export default AddPictureScreen;
