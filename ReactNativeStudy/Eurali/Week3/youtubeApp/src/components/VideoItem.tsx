import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {YoutubeVideo} from '../types/YoutubeVideo';
import colors from '../constants/color';
import screenInfo from '../constants/screenInfo';
import {SearchedYoutubeVideo} from '../types/SearchedYoutubeVideo';

const VideoItem = ({
  item,
  onClick,
}: {
  item: YoutubeVideo | SearchedYoutubeVideo;
  onClick: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Image
        source={{uri: item.snippet.thumbnails.medium.url}}
        alt="youtube thumbnail"
        width={screenInfo.width}
        height={screenInfo.height / 3.5}
      />
      <View style={styles.videoInfoContainer}>
        <Text style={styles.videoTitle}>
          {item.snippet.title.replaceAll('&#39;', '')}
        </Text>
        <View style={styles.videoInfo}>
          <Text style={styles.infoText}>{item.snippet.channelTitle}</Text>
          <Text style={styles.infoText}>·</Text>
          <Text style={styles.infoText}>
            {item.snippet.publishedAt.split('T')[0]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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

export default VideoItem;
