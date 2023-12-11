import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useFetchGET from '../hooks/useFetchGet';
import Config from 'react-native-config';
import colors from '../constants/color';

const Home = () => {
  const apiUrl = useMemo(
    () =>
      `${Config.YOUTUBE_API}//videos?part=snippet&chart=mostPopular&maxResults=25&key=${Config.YOUTUBE_API_KEY}`,
    [],
  );
  const {data, isLoading, error} = useFetchGET({url: apiUrl});

  return (
    <View>
      <Text style={styles.popularVideo}>인기 동영상</Text>
      {isLoading && <Text>로딩중</Text>}
      {!isLoading && data && <Text>haha</Text>}
      {error && <Text>에러 발생</Text>}
    </View>
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
