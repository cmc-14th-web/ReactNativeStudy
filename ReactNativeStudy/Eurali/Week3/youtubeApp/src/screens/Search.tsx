import React, {useCallback, useState} from 'react';
import Container from '../layout/Container';
import SvgIcons from '../assets/icons/SvgIcons';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import screenInfo from '../constants/screenInfo';
import {useNavigation} from '@react-navigation/core';
import colors from '../constants/color';
import Config from 'react-native-config';
import VideoItem from '../components/VideoItem';
import {YoutubeVideo} from '../types/YoutubeVideo';

const Search = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [videoList, setVideoList] = useState<YoutubeVideo[]>([]);
  const [pageToken, setPageToken] = useState<string>('');

  const fetchData = useCallback(
    async (searchText: string, nextPageToken: string, first: boolean) => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${Config.YOUTUBE_API}/search?part=snippet&type=video&q=${searchText}&maxResults=5&key=${Config.YOUTUBE_API_KEY}&pageToken=${nextPageToken}`,
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data.nextPageToken);
          console.log(data.items);
          if (first) {
            setVideoList(data.items);
          } else {
            const newItems = data.items.filter(
              (item: YoutubeVideo) =>
                !videoList.some(
                  existingItem => existingItem.etag === item.etag,
                ),
            );
            setVideoList([...videoList, ...newItems]);
          }
          setPageToken(data.nextPageToken);
        } else {
          const {message} = await response.json();
          console.log(message);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    },
    [videoList],
  );

  const handleClickSubmit = async () => {
    await fetchData(text, pageToken, true);
  };

  const onEndReached = async () => {
    // if (!isLoading && videoList && videoList.length >= 1) {
    //   await fetchData(text, pageToken);
    // }
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgIcons.BackIcon />
          </TouchableOpacity>
          <TextInput
            value={text}
            onChangeText={onChangeText}
            style={styles.input}
            placeholder="Youtube 검색"
            placeholderTextColor={colors.grey600}
            returnKeyType="search"
            onSubmitEditing={handleClickSubmit}
          />
        </View>
        {videoList && (
          <FlatList
            data={videoList}
            renderItem={({item}) => (
              <View key={item.etag}>
                <VideoItem item={item} />
              </View>
            )}
            keyExtractor={item => item.etag}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.6}
            ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
          />
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenInfo.height,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: (screenInfo.width * 5) / 6,
    height: 50,
    backgroundColor: colors.grey800,
    borderRadius: 100,
    paddingHorizontal: 20,
    color: colors.white,
  },
});

export default Search;
