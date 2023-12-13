import React from 'react';
import {FlatList, Pressable, Text} from 'react-native';
import Container from '../components/Container';
import SearchHeader from '../components/search/SearchHeader';
import TrendingVideosList from '../components/home/TrendingVideosList';
import {snippetVideosType, videosType} from '../types/trendingVideos';
import {useStore} from '../store/store';
import {useGetSearchResult} from '../hooks/useGetSearchResult';
import {calculatePublishedTime} from '../utils/calculatePublishedTime';
import getMoreInformation from '../apis/getMoreInformation';

export default function SearchScreen() {
  const {searchResults, setSearchResults} = useStore();

  const {fetchNextPage} = useGetSearchResult();

  const handleGetSearchResults = async () => {
    const refetch: any = await fetchNextPage();
    if (refetch.isSuccess) {
      const getNewSearchResults = refetch.data.pageParams.length;
      const param: any = [];
      refetch.data.pages[getNewSearchResults - 1].items.map((item: any) =>
        param.push(item.id.videoId),
      );

      try {
        (async () => {
          const insideRefetch: any = await getMoreInformation(param.join(','));
          const {items} = insideRefetch;
          const searchResultsValues: snippetVideosType[] = items.map(
            (item: videosType) => {
              return {
                viewCount: item.statistics.viewCount, // 조회수
                channelTitle: item.snippet.channelTitle, // 채널 이름
                title: item.snippet.title, // 제목
                thumbnails: item.snippet.thumbnails, // 썸네일 사진 정보
                publishedAt: calculatePublishedTime(item.snippet.publishedAt), // 업로드 날짜
              };
            },
          );
          setSearchResults([...searchResults, ...searchResultsValues]);
        })();
      } catch (err) {
        console.log(err, 'try catch 내부');
      }
    }
  };

  return (
    <Container>
      <SearchHeader handleGetSearchResults={handleGetSearchResults} />
      <Text>SearchScreen</Text>
      <FlatList
        data={searchResults}
        keyExtractor={(item: snippetVideosType) => item.publishedAt}
        renderItem={({item}: {item: snippetVideosType}) => (
          <TrendingVideosList item={item} />
        )}
      />
      <Pressable onPress={handleGetSearchResults}>
        <Text style={{color: 'white', alignSelf: 'center', marginVertical: 10}}>
          Hello
        </Text>
      </Pressable>
    </Container>
  );
}
