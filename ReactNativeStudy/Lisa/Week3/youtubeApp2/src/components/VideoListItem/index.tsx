import {FlatList} from 'react-native';

import VideoDetail from 'components/VideoDetail';
import {VideoListItemPropsType} from 'types/video';

const VideoListItem = ({videoList}: VideoListItemPropsType) => {
  return (
    <FlatList
      data={videoList}
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
};

export default VideoListItem;
