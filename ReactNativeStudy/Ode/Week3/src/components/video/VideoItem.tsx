import React from 'react';
import {Video} from '../../types/video';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import VideoItemInfo from './VideoItemInfo';
import VideoItemThumbnail from './VideoItemThumbnail';

type VideoProps = {video: Video};

export default function VideoItem({video}: VideoProps) {
  return (
    <TouchableOpacity>
      <View style={styles.layout}>
        <VideoItemThumbnail video={video} />
        <VideoItemInfo video={video} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  layout: {},
});
