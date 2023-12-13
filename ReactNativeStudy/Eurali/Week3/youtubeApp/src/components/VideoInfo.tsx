import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../constants/color';
import {VideoInfoType} from '../types/VideoInfo';

const VideoInfo = ({videoInfo}: {videoInfo: VideoInfoType}) => {
  return (
    <View style={styles.videoInfoContainer}>
      <Text style={styles.videoTitle}>
        {videoInfo.title.replaceAll('&#39;', '')}
      </Text>
      <View style={styles.videoInfo}>
        <Text style={styles.infoText}>{videoInfo.channelTitle}</Text>
        <Text style={styles.infoText}>·</Text>
        <Text style={styles.infoText}>
          {videoInfo.publishedAt.split('T')[0]}
        </Text>
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
    color: colors.grey100,
  },
  videoInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  infoText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.grey600,
  },
});

export default VideoInfo;
