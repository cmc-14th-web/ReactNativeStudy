import React from 'react';
import {Video} from '../../types/video';
import {Image, StyleSheet} from 'react-native';

type VideoItemThumbnailProps = {
  video: Video;
};

export default function VideoItemThumbnail({video}: VideoItemThumbnailProps) {
  return (
    <Image
      style={styles.image}
      src={video.snippet.thumbnails.medium.url}
      alt={video.snippet.title}
    />
  );
}

const styles = StyleSheet.create({
  image: {height: 180, marginVertical: 10},
});
