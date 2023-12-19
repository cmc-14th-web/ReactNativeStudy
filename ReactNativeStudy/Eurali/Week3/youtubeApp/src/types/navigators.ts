import {VideoInfoType} from './VideoInfo';

export type RootStackParamList = {
  TabNavigator: undefined;
  Search: undefined;
  VideoPlay: {
    videoId: string;
    videoInfo: VideoInfoType;
  };
};

export type TabParamList = {
  홈: undefined;
  설정: undefined;
};
