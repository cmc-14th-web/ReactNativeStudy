import {StyleSheet, Text, View} from 'react-native';

import {typoStyles} from 'styles/typo';
import {theme} from 'styles/theme';
import {useGetPopularVideosQuery} from 'libs/hooks/useGetPopularVideosQuery';
import VideoListItem from 'components/VideoListItem';
import Loading from 'components/atoms/Loading';
import Error from 'components/atoms/Error';

const Home = () => {
  const {videoList, isLoading, isError} = useGetPopularVideosQuery();

  return (
    <View style={homeStyles.container}>
      {(() => {
        if (isLoading) {
          return <Loading />;
        }
        if (isError) {
          return <Error />;
        }

        return (
          <>
            <View style={homeStyles.textContainer}>
              <Text style={homeStyles.text}>인기 동영상</Text>
            </View>
            <VideoListItem videoList={videoList!} />
          </>
        );
      })()}
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
