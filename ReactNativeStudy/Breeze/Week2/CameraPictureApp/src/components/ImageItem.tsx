import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';

interface ImageItemProp {
  base64Image: string;
  onPress: () => void;
}
function ImageItem({base64Image, onPress}: ImageItemProp) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{uri: `data:image/jpeg;base64,${base64Image}`}}
      />
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
