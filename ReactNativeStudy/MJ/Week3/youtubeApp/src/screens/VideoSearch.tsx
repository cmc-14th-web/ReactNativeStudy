import {useQuery} from '@tanstack/react-query';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import Youtube from '../api/Youtube';
import ArrowBackIcon from '../assets/ArrowBack.svg';
import VideoItem from '../components/VideoItem';
import {useNavigator} from '../hooks/useNavigator';
import pageTokenState from '../store/pageToken';
import palette from '../styles/palette';
import {YoutubeVideo} from '../type';

const VideoSearch = () => {
  const navigator = useNavigator();
  const [text, setText] = useState<string>('');
  const pageToken = useRecoilValue(pageTokenState);

  const {data, isLoading, error, refetch} = useQuery({
    queryKey: ['videos'],
    queryFn: () => Youtube.findVideos(text, pageToken),
  });

  console.log(data?.items, error);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowBack}
          onPress={() => navigator.stackNavigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <TextInput
          style={styles.search}
          returnKeyType="search"
          placeholder="Youtube 검색"
          value={text}
          onChangeText={setText}
          onSubmitEditing={() => {
            refetch();
          }}
        />
      </View>
      {(() => {
        if (isLoading) {
          return (
            <View style={{...styles.screen, ...styles.center}}>
              <ActivityIndicator size="large" color={palette.Red} />
            </View>
          );
        }

        if (error) {
          return (
            <View style={{...styles.screen, ...styles.center, ...styles.error}}>
              <Text>로딩 중 에러가 발생했습니다. 다시 시도해주세요.</Text>
            </View>
          );
        }
        return (
          <FlatList
            data={data?.items}
            keyExtractor={(item: YoutubeVideo) => item.id + item.etag}
            renderItem={({item}: {item: YoutubeVideo}) => (
              <VideoItem snippet={item.snippet} statistics={item.statistics} />
            )}
          />
        );
      })()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.Black,
  },
  header: {
    marginTop: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowBack: {
    width: 25,
    height: 25,
  },
  search: {
    width: 330,
    height: 30,
    padding: 10,
    color: palette.White,
    backgroundColor: palette.Gray800,
    borderRadius: 30,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: palette.Red,
    fontSize: 32,
  },
});

export default VideoSearch;
