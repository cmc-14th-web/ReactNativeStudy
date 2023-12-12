import React from 'react';
import {Video} from '../types/video';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../styles/colors';
import formatRelativeTime from '../utils/formatRelative';

type VideoInfoProps = {
  video: Video;
};

export default function VideoInfo({video}: VideoInfoProps) {
  const {title, channelTitle, publishedAt} = video.snippet;

  return (
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detail}>
        <Text style={styles.subTitle}>{channelTitle}</Text>
        <Text style={styles.subTitle}>
          &nbsp;· {formatRelativeTime(publishedAt)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {paddingHorizontal: 18, gap: 6},
  title: {color: Colors.White},
  detail: {flexDirection: 'row'},
  subTitle: {color: Colors.Gray.a600, fontSize: 12},
});
