export type RootStackParamList = {
  Home: undefined;
  VideoSearch: undefined;
  VideoInfo: undefined;
  BottomTabNavigation: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Setting: undefined;
};

export interface YoutubeVideo {
  kind: string;
  etag: 'etag';
  id: string;
  snippet: {
    viewCount: string;
    publishedAt: string; // 사용
    channelId: string;
    title: string; // 사용
    description: string;
    thumbnails: {
      medium: {
        url: string; // 사용
        width: number;
        height: number;
      };
    };
    channelTitle: string; // 사용
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: {
    viewCount: string;
  };
}

export interface YoutubeVideoList {
  kind: string;
  etag: 'etag';
  nextPageToken: string; // 사용
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeVideo[];
}
