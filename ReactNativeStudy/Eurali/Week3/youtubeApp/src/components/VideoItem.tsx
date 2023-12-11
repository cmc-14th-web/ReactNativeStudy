import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {YoutubeVideo} from '../types/YoutubeVideo';
import colors from '../constants/color';
import screenInfo from '../constants/screenInfo';

const VideoItem = ({item}: {item: YoutubeVideo}) => {
  return (
    <View>
      <Image
        source={{uri: item.snippet.thumbnails.medium.url}}
        alt="youtube thumbnail"
        width={screenInfo.width}
        height={screenInfo.height / 3.5}
      />
      <View style={styles.videoInfoContainer}>
        <Text style={styles.videoTitle}>{item.snippet.title}</Text>
        <View style={styles.videoInfo}>
          <Text>{item.snippet.channelTitle}</Text>
          <Text>·</Text>
          <Text>{item.snippet.publishedAt}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoInfoContainer: {
    padding: 8,
    paddingBottom: 18,
  },
  videoTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.black,
  },
  videoInfo: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 10,
    fontWeight: '500',
    color: colors.grey600,
    gap: 2,
  },
});

export default VideoItem;
