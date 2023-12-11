import React from 'react';
import {Video} from '../../types/video';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../styles/colors';
import formatRelativeTime from '../../utils/formatRelative';

type VideoProps = {video: Video};

export default function VideoItem({video}: VideoProps) {
  return (
    <View style={styles.layout}>
      <Image
        style={styles.image}
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{video.snippet.title}</Text>
        <View style={styles.detail}>
          <Text style={styles.subTitle}>{video.snippet.channelTitle}</Text>

          <Text style={styles.subTitle}>
            &nbsp;· {formatRelativeTime(video.snippet.publishedAt)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {},
  image: {height: 180, marginVertical: 10},
  info: {paddingHorizontal: 18, gap: 6},
  title: {color: Colors.White},
  detail: {flexDirection: 'row'},
  subTitle: {color: Colors.Gray.a600, fontSize: 12},
});
