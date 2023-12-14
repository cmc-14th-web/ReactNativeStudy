import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useGetVideos} from '../hooks/useGetVideos';
import VideoList from '../components/VideoList';
import {COLOR} from '../constants/color';

const Home = () => {
  const {isLoading, isError, videoData} = useGetVideos();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error!</Text>;
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>인기 동영상</Text>
      <VideoList videoData={videoData} />
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLOR.GRAY_900,
  },
  title: {
    color: COLOR.RED,
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 10,
    paddingLeft: 18,
  },
});
