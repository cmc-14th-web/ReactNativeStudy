import {StyleSheet, Text, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import {VideoApi} from 'apis/VideoApi';
import {typoStyles} from 'styles/typo';
import {theme} from 'styles/theme';
import VideoListItem from 'components/VideoListItem';
import {queryKey} from 'constants/api';

const Home = () => {
  const {data: videoList} = useQuery([queryKey.VIDEOLIST], () =>
    VideoApi.GET_POPULAR_VIDEOS(),
  );

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.textContainer}>
        <Text style={homeStyles.text}>인기 동영상</Text>
      </View>
      <VideoListItem videoList={videoList!} />
    </View>
  );
};

export default Home;

const homeStyles = StyleSheet.create({
  container: {
    height: '100%',
  },
  textContainer: {
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  text: {
    color: theme.palette.red,
    fontSize: typoStyles.typo.body_2.fontSize,
    fontWeight: typoStyles.typo.body_2.fontWeight,
    lineHeight: typoStyles.typo.body_2.lineHeight,
  },
});
