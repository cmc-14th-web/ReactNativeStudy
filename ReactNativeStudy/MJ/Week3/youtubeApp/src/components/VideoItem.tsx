import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigator} from '../hooks/useNavigator';
import palette from '../styles/palette';
import DateUtils from '../utils/DateUtils';

interface VideoItemProps {
  snippet: {
    viewCount: string;
    publishedAt: string; // 사용
    channelId: string;
    title: string; // 사용
    description: string;
    thumbnails: {
      medium: {
        url: string; // 사용
        width: number;
        height: number;
      };
    };
    channelTitle: string; // 사용
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: {
    viewCount: string;
  };
}

const VideoItem = ({snippet, statistics}: VideoItemProps) => {
  const navigator = useNavigator();
  return (
    <TouchableOpacity
      onPress={() => navigator.stackNavigation.navigate('VideoInfo')}>
      <View>
        <Image
          source={{uri: snippet.thumbnails.medium.url}}
          height={snippet.thumbnails.medium.height}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.videoTitle}>{snippet.title}</Text>
          <View style={styles.videoInfoView}>
            <Text style={styles.videoInfoText}>{snippet.channelTitle}</Text>
            <Text style={styles.videoInfoText}>{' · '}</Text>
            <Text style={styles.videoInfoText}>
              조회수 {Math.ceil(Number(statistics.viewCount) / 100000)}만회
            </Text>
            <Text style={styles.videoInfoText}>{' · '}</Text>
            <Text style={styles.videoInfoText}>
              {DateUtils.daysAgo(snippet.publishedAt)}일 전
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  info: {
    padding: 10,
  },
  videoTitle: {
    color: palette.White,
  },
  videoInfoView: {
    flexDirection: 'row',
  },
  videoInfoText: {
    color: palette.Gray600,
  },
});

export default VideoItem;
