import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';

interface ImageItemProp {
  image: string;
  onPress: () => void;
}
function ImageItem({image, onPress}: ImageItemProp) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{uri: image}} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
export default ImageItem;
