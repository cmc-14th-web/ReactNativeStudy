import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import useStore from '../store';
import colors from '../styles/colors';

const DetailImage = () => {
  const curImageInfo = useStore(state => state.curImageInfo);
  const setIsHome = useStore(state => state.setIsHome);

  useEffect(() => {
    setIsHome(false);
  });

  return (
    <View style={styles.container}>
      <Image source={{uri: curImageInfo?.path}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 50,
    backgroundColor: colors.DeepDarkGrey,
  },
  image: {
    width: '100%',
    height: '80%',
  },
});

export default DetailImage;
