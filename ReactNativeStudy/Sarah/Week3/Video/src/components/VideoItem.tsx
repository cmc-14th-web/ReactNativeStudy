import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLOR} from '../constants/color';

interface VideoItemProps {
  publishedAt?: string;
  title: string;
  url: string;
  channelTitle: string;
}

const VideoItem = ({publishedAt, title, url, channelTitle}: VideoItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{uri: url}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.publishedAt}>{publishedAt}</Text>
        <Text style={styles.channelTitle}>{channelTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.GRAY_900,
    flexDirection: 'column',
    margin: 10,
  },
  thumbnail: {
    width: '100%',
    height: 180,
    marginBottom: 12,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOR.GRAY_100,
  },
  publishedAt: {
    fontSize: 12,
    color: COLOR.GRAY_600,
  },
  channelTitle: {
    fontSize: 12,
    color: COLOR.GRAY_600,
  },
});

export default VideoItem;
