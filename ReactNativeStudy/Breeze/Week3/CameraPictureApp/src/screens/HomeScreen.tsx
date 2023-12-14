import {View, FlatList, Text, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';

import {getPlayList} from '../apis/getPlayList';
import Video from '../components/Video';
import {palette} from '../styles/ColorPalette';

function HomeScreen() {
  //const {stackNavigation} = useNavigator();

  // 디테일 페이지로 이동하기
  //const detailClick = (id: string) => {
  //  stackNavigation.navigate('Detail', {id});
  //};
  const {data} = useQuery('playList', () => getPlayList());
  // 데이터 가공하기
  const videoData = data?.map(item => {
    return {
      uri: item.snippet.thumbnails.default.url,
      writer: item.snippet.channelTitle,
      title: item.snippet.title,
      date: item.snippet.publishedAt,
      //viewCount: item.statistics.viewCount,
    };
  });

  return (
    <View>
      <Text style={styles.text}>인기 동영상</Text>
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
            //view={item.viewCount}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: palette.red,
    fontSize: 18,
    marginTop: 30,
    marginLeft: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;
