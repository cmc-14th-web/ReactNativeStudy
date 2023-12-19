import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {VideoDetailType} from '../types/videos';
import palette from '../styles/palette';

export default function VideoDetailText({item}: {item: VideoDetailType}) {
  return (
    <View style={styles.contentWrapStyle}>
      <Text numberOfLines={1} style={styles.titleStyle}>
        {item.title}
      </Text>
      <Text style={styles.informationStyle}>
        {item.channelTitle} • 조회수 {item.viewCount} • {item.publishedAt}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapStyle: {
    marginTop: 12,
    paddingHorizontal: 18,
  },
  titleStyle: {
    color: palette.White,
    fontSize: 16,
  },
  informationStyle: {
    color: palette.Gray600,
    fontSize: 12,
    marginTop: 6,
  },
});
