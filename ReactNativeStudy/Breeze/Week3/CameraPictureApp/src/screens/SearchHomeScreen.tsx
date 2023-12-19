import {FlatList, View} from 'react-native';
import {useInfiniteQuery} from 'react-query';
import {useRecoilValue} from 'recoil';

import {getSearchPlayList} from '../apis/getSearchPlayList';
import Video from '../components/Video';
import SearchHeader from '../components/SearchHeader';
import {searchState} from '../recoil/atom';

function SearchHomeScreen() {
  const search = useRecoilValue(searchState);

  const fetchSearchVideos = async (_, nextPageToken = '', maxResults = 5) => {
    return getSearchPlayList(search, nextPageToken, maxResults);
  };

  const {data, fetchNextPage, hasNextPage, isFetching} = useInfiniteQuery(
    'searchVideos',
    fetchSearchVideos,
    {
      getNextPageParam: lastPage => lastPage.nextPageToken,
    },
  );

  const videoData =
    data?.pages.flatMap(page =>
      page.items.map(item => ({
        uri: item.snippet.thumbnails.default.url,
        writer: item.snippet.channelTitle,
        title: item.snippet.title,
        date: item.snippet.publishedAt,
        // viewCount: item.statistics.viewCount,
      })),
    ) || [];

  return (
    <View>
      <SearchHeader />
      <FlatList
        data={videoData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <Video
            key={index}
            uri={item.uri}
            writer={item.writer}
            title={item.title}
            date={item.date}
            // view={item.viewCount}
          />
        )}
        onEndReached={() => {
          if (hasNextPage && !isFetching) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}
export default SearchHomeScreen;
