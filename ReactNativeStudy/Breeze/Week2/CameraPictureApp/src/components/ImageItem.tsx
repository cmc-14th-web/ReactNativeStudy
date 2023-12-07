import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

interface ImageItemProp {
  base64Image: string;
}
function ImageItem({base64Image}: ImageItemProp) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `data:image/jpeg;base64,${base64Image}`}}
      />
    </View>
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
