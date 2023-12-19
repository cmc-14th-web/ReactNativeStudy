import React from 'react';
import {Image, Dimensions, StyleSheet, Pressable} from 'react-native';
import {SnippetVideosType} from '../types/videos';
import useNavigator from '../hooks/useNavigator';
import {useStore} from '../store/store';
import VideoDetailText from './VideoDetailText';

export default function VideoDetail({item}: {item: SnippetVideosType}) {
  const stackNavigation = useNavigator();
  const {setVideoDetail} = useStore();
  const {width: deviceWidth} = Dimensions.get('screen');

  const goToVideoDetailScreen = () => {
    stackNavigation.navigate('PlayVideo');
    setVideoDetail({
      videoId: item.videoId,
      viewCount: item.viewCount,
      channelTitle: item.channelTitle,
      title: item.title,
      publishedAt: item.publishedAt,
    });
  };

  return (
    <Pressable onPress={goToVideoDetailScreen} style={styles.container}>
      <Image
        source={{uri: item.thumbnails.high.url}}
        alt="thumbnails"
        width={deviceWidth}
        height={180}
      />
      <VideoDetailText item={item} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {paddingVertical: 10},
});
