import {FlatList} from 'react-native';

import VideoDetail from 'components/VideoDetail';
import {VideoListItemPropsType, VideoListItemVariant} from 'types/video';

const VideoListItem = ({
  videoList,
  variant = 'popular',
  fetchNextPage,
}: VideoListItemPropsType<VideoListItemVariant>) => {
  return (() => {
    if (variant === 'search') {
      return (
        <FlatList
          data={videoList}
          keyExtractor={(_, index) => index.toString()}
          onEndReached={() => fetchNextPage && fetchNextPage()}
          onEndReachedThreshold={0.5}
          renderItem={({item}) => (
            <VideoDetail
              key={item.id}
              publishedAt={item.snippet.publishedAt}
              title={item.snippet.title}
              thumbnailUrl={item.snippet.thumbnails.medium.url}
              channelTitle={item.snippet.channelTitle}
            />
          )}
        />
      );
    }

    return (
      <FlatList
        data={videoList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <VideoDetail
            key={item.id}
            publishedAt={item.snippet.publishedAt}
            title={item.snippet.title}
            thumbnailUrl={item.snippet.thumbnails.medium.url}
            channelTitle={item.snippet.channelTitle}
          />
        )}
      />
    );
  })();
};

export default VideoListItem;
