import React from 'react';
import {Video} from '../types/video';
import {StyleSheet, View} from 'react-native';
import VideoInfo from './VideoInfo';
import VideoThumbnail from './VideoThumbnail';

type VideoProps = {video: Video};

export default function VideoSummary({video}: VideoProps) {
  return (
    <View style={styles.layout}>
      <VideoThumbnail video={video} />
      <VideoInfo video={video} />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {},
});
