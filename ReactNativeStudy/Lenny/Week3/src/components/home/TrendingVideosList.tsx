import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import palette from '../../styles/palette';
import {SnippetVideosType} from '../../types/videos';

export default function TrendingVideosList({item}: {item: SnippetVideosType}) {
  const {width: deviceWidth} = Dimensions.get('screen');
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.thumbnails.high.url}}
        alt="thumbnails"
        width={deviceWidth}
        height={180}
      />
      <View style={styles.contentWrapStyle}>
        <Text numberOfLines={1} style={styles.titleStyle}>
          {item.title}
        </Text>
        <Text style={styles.informationStyle}>
          {item.channelTitle} • 조회수 {item.viewCount} • {item.publishedAt}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingVertical: 10},
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
