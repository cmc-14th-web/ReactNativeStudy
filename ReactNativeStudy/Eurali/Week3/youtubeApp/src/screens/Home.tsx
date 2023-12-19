import React, {useMemo} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import useFetchGET from '../hooks/useFetchGet';
import Config from 'react-native-config';
import colors from '../constants/color';
import VideoItem from '../components/VideoItem';
import Container from '../layout/Container';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigators';
import {YoutubeVideo} from '../types/YoutubeVideo';

const Home = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const apiUrl = useMemo(
    () =>
      `${Config.YOUTUBE_API}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${Config.YOUTUBE_API_KEY}`,
    [],
  );
  const {data, isLoading, error} = useFetchGET({url: apiUrl, firstGet: true});

  const handleClickVideo = (item: YoutubeVideo) => {
    navigation.navigate('VideoPlay', {
      videoId: item.id,
      videoInfo: {
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
      },
    });
  };

  return (
    <Container>
      <ScrollView>
        <Text style={styles.popularVideo}>인기 동영상</Text>
        {isLoading && <Text>로딩중</Text>}
        {!isLoading &&
          data &&
          data.items.map(item => (
            <View key={item.id}>
              <VideoItem item={item} onClick={() => handleClickVideo(item)} />
            </View>
          ))}
        {error && <Text>에러 발생</Text>}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  popularVideo: {
    color: colors.red,
    fontSize: 15,
    fontWeight: '600',
    padding: 10,
  },
});

export default Home;
